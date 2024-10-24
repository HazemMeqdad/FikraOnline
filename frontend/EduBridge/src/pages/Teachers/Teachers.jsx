import React, { useState } from 'react'
import TeacherCard from './TeacherCard'
const Teachers = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-4">أفضل المعلمين في الوطن العربي</h2>
                <SearchBar />

            </div>
        </>
    )
}
const SearchBar = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
            {/* Filter Button */}
            <button className="flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 6a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm3 5a1 1 0 000 2h8a1 1 0 000-2H6zM1 16a1 1 0 001 1h16a1 1 0 100-2H2a1 1 0 00-1 1z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">فلترة</span>
                <span className="bg-orange-500 text-white ml-2 px-2 rounded-full">3</span>
            </button>

            {/* Search Input */}
            <div className="flex-1 mx-4">
                <input
                    type="text"
                    placeholder="تصميم الويب"
                    className="w-full p-2 border rounded-lg"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {/* Sorting Dropdown */}
            <div className="relative">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                    الرائج
                </button>
                {/* Dropdown logic can go here if needed */}
            </div>
        </div>
    );
};
const CoursesGrid = () => {
    const courses = [
        {
            image: "https://example.com/python-course.jpg",
            price: 35,
            title: "Learn Python Programming Masterclass",
            category: "IT & Software",
            rating: 4.0,
            students: 211434,
        },
        {
            image: "https://example.com/blender-course.jpg",
            price: 49,
            title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
            category: "Design",
            rating: 4.9,
            students: 197637,
        },
        {
            image: "https://example.com/adobe-premiere-course.jpg",
            price: 32,
            title: "Adobe Premiere Pro CC – Advanced Training Course",
            category: "Developments",
            rating: 4.6,
            students: 236568,
        },
        // More courses...
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
                <TeacherCard
                    key={index}
                    image={course.image}
                    price={course.price}
                    title={course.title}
                    category={course.category}
                    rating={course.rating}
                    students={course.students}
                />
            ))}
        </div>
    );
};

export default Teachers