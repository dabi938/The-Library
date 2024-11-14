import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from './Footer'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <div className='my-10'>
      <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className=" dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <div className='flex flex-col items-center justify-center'>
                       <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Our Services</h1>
                       <div className='bg-blue-700 rounded-lg py-1 w-10 mb-14 '></div>
                    </div>
                   
                    <p className="text-lg font-normal text-black dark:text-gray-400 mb-6">
                        <p>
                          <h2 className='my-5 font-bold'>Search for Books</h2>
                          Our library management system makes finding books easy and efficient. The search feature is designed to quickly filter through a comprehensive database of books, allowing users to search by title, author, category, publisher, or keywords. Once located, each book entry provides detailed information, including its exact location within the library, such as the aisle, shelf number, and any specific section. This precise information helps users save time and effort, ensuring they find what they need without wandering through the stacks. The system also provides book summaries, publication details, and related topics, enriching the search experience for students, researchers, and casual readers alike.
                        </p>
                        <p>
                          <h2 className='my-5 font-bold'>Read Books Online & Download</h2>
                          Our digital library offers convenient access to a vast collection of e-books and online resources. Users can browse, read, and download e-books directly through our platform. Each title in the online collection is accessible instantly, allowing users to read on-screen or download a PDF for offline reading. This feature is perfect for users who need access to educational materials, research papers, or recreational reading from home, on campus, or on the go. The collection spans multiple genres and categories, making it ideal for students, faculty, and the general public. With digital books available at your fingertips, your learning and exploration are never interrupted.
                        </p>
                        <p>
                          <h2 className='my-5 font-bold'>Request to Borrow</h2>
                          When users find a book they want to borrow, they can send a borrow request directly to the system administrator with a simple click. This process is quick and streamlined to provide a smooth borrowing experience. Once the request is received, the system admin reviews it, checks availability, and sends an update notification to the user with instructions for pickup or details on the borrowing period. This feature ensures that users can reserve popular or high-demand books in advance, reducing wait times and enhancing user satisfaction. Our borrow request system makes connecting with administrators easy, so users always know the status of their requests.
                        </p>
                        <p>
                          <h2 className='my-5 font-bold'>Personalized User Experience</h2>
                          Our system offers a personalized library experience tailored to each user’s interests and reading habits. By tracking previously borrowed books and online reading history, the platform can suggest new titles, related topics, and popular reads that align with each user’s preferences. Users can create personal profiles where they can save favorite titles, build custom reading lists, and receive personalized recommendations. This tailored approach enriches the user experience, making the library feel more engaging, dynamic, and relevant.
                        </p>
                        <p>
                          <h2 className='my-5 font-bold'>Stay Updated</h2>
                          Users stay informed with timely notifications and updates about their borrow requests, due dates, and any newly arrived books matching their interests. The system sends alerts for important library news, including upcoming events, new acquisitions, and featured collections, ensuring users are always aware of the latest additions to the library. This service helps users make the most of the library’s offerings and stay connected to new opportunities for learning and reading.
                        </p>
                        <p>
                          <h2 className='my-5 font-bold'>Accessible, Anytime and Anywhere</h2>
                          Our library management system is designed to be accessible across multiple devices, including desktops, tablets, and smartphones. Whether a user is in the library, at home, or traveling, they can connect to the platform and access library resources, manage borrow requests, or explore new titles. This flexibility ensures that the library’s wealth of resources is available whenever needed, making it an indispensable tool for learning and research. Our cross-device compatibility offers users a seamless experience, empowering them to stay connected to their library regardless of location.
                        </p>
                    </p>
                </div>
            </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Services
