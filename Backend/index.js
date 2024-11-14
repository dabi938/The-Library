const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const bcrypt = require('bcrypt')
const multer = require('multer');
const path = require('path');

// Configure multer for PDF storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/ebooks/') 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed!'), false);
        }
    }
});
//middleware {which helps us to connect with the frontend side of our app}
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// app.get('/', (req, res) =>{
//     res.send('Hello World')
// })

//For PDF Uploading..
// const multer = require('multer');
// const path = require('path');
// const upload = multer({ dest: 'uploads/' }); // Set the directory to store uploaded files


//MongoDB Cofiguration (pest the code from the mongodb website as a tempo)

const {MongoClient , ServerApiVersion, ObjectId} = require('mongodb');
const uri = "mongodb://localhost:27017/Mint-Library"

//Creating the mongodb client
const client = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(){
    try{
        //connect the client
        await client.connect();

        //creating a collection of document{"TheLibrary-whole name of the data base" is a Db and "books" is a collction which is located inside BookInventory database}
        //also theLibrary is method to sand a data
        const theLibrary = client.db("TheLibrary").collection("books");
         
        //mongoDb CRUD operation Doc

         ////////////////////////////////////////////////
        //     FOR BOOKS IN THE LIBRARY               //
       ////////////////////////////////////////////////

        //insert books into a database using POST method 
        app.post("/upload-book", async(req, res) => {
            const data = req.body;
            const result = await theLibrary.insertOne(data);
            res.send(result);
        })

        // geting all books fromm the DB
        app.get("/all-books", async(req, res) => {
            const books = theLibrary.find();
            const result = await books.toArray();
            res.send(result);
        })

        //get single books data
        app.get("/book/:id", async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await theLibrary.findOne(filter);
            res.send(result);
        })

        // Updating a book's data using PATCH method
        app.patch("/book/:id", async (req, res) => {
            const id = req.params.id;
            const updateBookData = req.body;

            // Destructure to remove `_id` if it exists in the incoming data
            const { _id, ...updatedFields } = updateBookData; // Exclude `_id`

            // Define the filter using the ObjectId
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true };
            const updateDoc = {
                $set: {
                    ...updatedFields // Only set the fields without `_id`
                }
            };

            try {
                // Perform the update operation
                const result = await theLibrary.updateOne(filter, updateDoc, option);
                res.send(result); // Send the result back to the client
            } catch (error) {
                console.error("Error updating book:", error);
                res.status(500).send({ error: "Failed to update book." });
            }
        });

        //Delet operation 
        app.delete("/book/:id", async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await theLibrary.deleteOne(filter);
            res.send(result);
        })

        //find by catagory
        app.get("/all-books", async(req, res) => {
            let query = {};
            if(req.query?.category){
                query = {category: req.query.category}
            }
            const result = await theLibrary.find(query).toArray();
            res.send(result);
        })


         ////////////////////////////////////////////////
        //     FOR E-BOOKS                            //
       ////////////////////////////////////////////////
        
        
        // MongoDB Collection
        const theEbooks = client.db("TheLibrary").collection("Ebooks");

        // Update the upload-ebook endpoint
        app.post("/upload-ebook", upload.single('pdfFile'), async(req, res) => {
            try {
                const data = {
                    ...req.body,
                    pdfPath: req.file ? `/uploads/ebooks/${req.file.filename}` : null
                };
                const result = await theEbooks.insertOne(data);
                res.send(result);
            } catch (error) {
                res.status(500).send({ error: "Failed to upload ebook" });
            }
        });
        
        // Route to get all eBooks
        app.get("/all-ebooks", async (req, res) => {
            const books = theEbooks.find();
            const result = await books.toArray();
            res.send(result);
        });
        
        // Route to get a single eBook by ID
        app.get("/ebook/:id", async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await theEbooks.findOne(filter);
            res.send(result);
        })
        
        // Route to update an eBook by ID
        app.patch("/ebook/:id", async (req, res) => {
            const id = req.params.id;
            const updateBookData = req.body;

            // Destructure to remove `_id` if it exists in the incoming data
            const { _id, ...updatedFields } = updateBookData; // Exclude `_id`

            // Define the filter using the ObjectId
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true };
            const updateDoc = {
                $set: {
                    ...updatedFields // Only set the fields without `_id`
                }
            };

            try {
                // Perform the update operation
                const result = await theEbooks.updateOne(filter, updateDoc, option);
                res.send(result); // Send the result back to the client
            } catch (error) {
                console.error("Error updating book:", error);
                res.status(500).send({ error: "Failed to update book." });
            }
        });        
        
        // Route to delete an eBook by ID
        app.delete("/ebook/:id", async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await theEbooks.deleteOne(filter);
            res.send(result);
        })

        
        // Route to find eBooks by category
        app.get("/all-ebooks", async(req, res) => {
            let query = {};
            if(req.query?.category){
                query = {category: req.query.category}
            }
            const result = await theEbooks.find(query).toArray();
            res.send(result);
        })

         ////////////////////////////////////////////////
        //          FOR REQUEST                       //
       ////////////////////////////////////////////////
        

         // MongoDB Collection for Request
         const theRequest = client.db("TheLibrary").collection("Request");
        
         // Route to made a request
         app.post("/send-request", async(req, res) => {
             const data = req.body;
             const result = await theRequest.insertOne(data);
             res.send(result);
         })
         
         // Route to get all request
         app.get("/all-request", async (req, res) => {
             const books = theRequest.find();
             const result = await books.toArray();
             res.send(result);
         });
         
         // Route to get a single request
         app.get("/request/:id", async(req, res) => {
             const id = req.params.id;
             const filter = {_id: new ObjectId(id)};
             const result = await theRequest.findOne(filter);
             res.send(result);
         })
         
         // Route to update a request
         app.patch("/request/:id", async (req, res) => {
             const id = req.params.id;
             const updateBookData = req.body;
 
             // Destructure to remove `_id` if it exists in the incoming data
             const { _id, ...updatedFields } = updateBookData; // Exclude `_id`
 
             // Define the filter using the ObjectId
             const filter = { _id: new ObjectId(id) };
             const option = { upsert: true };
             const updateDoc = {
                 $set: {
                     ...updatedFields // Only set the fields without `_id`
                 }
             };
 
             try {
                 // Perform the update operation
                 const result = await theRequest.updateOne(filter, updateDoc, option);
                 res.send(result); // Send the result back to the client
             } catch (error) {
                 console.error("Error updating book:", error);
                 res.status(500).send({ error: "Failed to update book." });
             }
         })

         //Route to delete a request
        app.delete("/request/:id", async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await theRequest.deleteOne(filter);
            res.send(result);
        })



         ////////////////////////////////////////////////
        //          FOR USERS                         //
       ////////////////////////////////////////////////
        

         // MongoDB Collection for Users
        const Users = client.db("TheLibrary").collection("Users");

        // Hardcoded Admin Setup
        async function setupAdmin() {
            const adminExists = await Users.findOne({
                $or: [{ email: "dabihaile@gmail.com" }, { username: "Dabi" }]
            });

            if (!adminExists) {
                const hashedPassword = await bcrypt.hash('123', 10); // Securely hash admin password
                const adminUser = {
                    username: "Dabi",
                    email: "dabihaile@gmail.com",
                    password: hashedPassword,
                    role: 'admin'
                };
                await Users.insertOne(adminUser);
                console.log("Admin created successfully.");
            } else {
                console.log("Admin already exists.");
            }
        }
        setupAdmin().catch(console.error);

        //User Registration Endpoint
        app.post("/create-userinfo", async (req, res) => {
            try {
                const { name, email, password } = req.body;
                
                // Check if email already exists
                const existingUser = await Users.findOne({ email });
                if (existingUser) {
                    return res.status(400).send({ 
                        success: false, 
                        message: "Email already registered" 
                    });
                }
        
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = { name, email, password: hashedPassword, role: 'user' };
        
                await Users.insertOne(newUser);
                res.status(201).send({ success: true, message: "User registered successfully." });
            } catch (error) {
                console.error("Error registering user:", error);
                res.status(500).send({ success: false, message: "Failed to register user." });
            }
        });

        // Login Verification Endpoint
        app.post("/login", async (req, res) => {
            const { email, password } = req.body;

            try {
                const user = await Users.findOne({ email });
                if (user && await bcrypt.compare(password, user.password)) {
                    const { password, ...userWithoutPassword } = user; // Exclude password from response
                    res.send({ success: true, user: userWithoutPassword });
                } else {
                    res.status(401).send({ success: false, message: "Invalid email or password" });
                }
            } catch (error) {
                console.error("Login error:", error);
                res.status(500).send({ success: false, message: "An error occurred during login." });
            }
        });

        // Endpoint to get all user info (for demonstration purposes)
        app.get("/all-userinfo", async (req, res) => {
            try {
                const users = await Users.find().project({ password: 0 }).toArray(); // Exclude passwords
                res.send(users);
            } catch (error) {
                console.error("Error fetching users:", error);
                res.status(500).send({ success: false, message: "Failed to retrieve user information." });
            }
        });












        //send ping to conform
        await client.db('admin').command({ping: 1});
        console.log("You successfully connected to mongodb!");

    }finally{
        //to ensure thet the client will close when it finish
        // await client.close();
    }

}
run().catch(console.dir);


app.listen(port, () => {
    console.log('The app listini $(port)')
})