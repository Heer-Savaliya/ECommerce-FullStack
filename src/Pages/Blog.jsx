import React from 'react'

const Blog = () => {

const blogPosts = [
  {
    
    title: 'Top 10 Spices Every Kitchen Needs',
    author: 'Sophie Green',
    date: '28 May 2025',
    img: '/images/blog/blog1.jpg',
  },
  {
    title: 'How to Store Fresh Produce Correctly',
    author: 'Arjun Mehta',
    date: '26 May 2025',
    img: '/images/blog/blog2.jpg',
  },
  {
    title: 'Meal Prep Hacks for Busy Weekdays',
    author: 'Lena Patel',
    date: '25 May 2025',
    img: '/images/blog/blog3.jpg',
  },
  {
    title: 'Easy One-Pot Dinner Recipes',
    author: 'Carlos Rivera',
    date: '24 May 2025',
    img: '/images/blog/blog4.jpg',
  },
  {
    title: 'Why Organic Matters in Your Diet',
    author: 'Dr. Nina Rao',
    date: '22 May 2025',
    img: '/images/blog/blog5.jpg',
  },
  {
    title: 'The Ultimate Grocery Checklist',
    author: 'Eliza Dsouza',
    date: '21 May 2025',
    img: '/images/blog/blog6.jpg',
  },
  {
    title: 'Seasonal Fruits to Try This Summer',
    author: 'Ravi Kapoor',
    date: '20 May 2025',
    img: '/images/blog/blog7.jpg',
  },
  {
    title: 'Budget-Friendly Grocery Shopping Tips',
    author: 'Anjali Verma',
    date: '19 May 2025',
    img: '/images/blog/blog8.jpg',
  },
  {
    title: '5-Minute Healthy Breakfast Ideas',
    author: 'Chef Alex Dhanraj',
    date: '18 May 2025',
    img: '/images/blog/blog9.jpg',
  },
];

  return (
    <div className='container !py-8 md:!py-10'>
      <h1 className='font-semibold text-sm md:text-base mb-6'>Recent blog posts</h1>

      {/* Blogs */}
      {/* <div className='grid '>
          <div>
            <img src="" alt="" />
          </div>
      </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                <p className="text-sm text-gray-500">
                  {post.author} • {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Loading more...</button>
        </div>
  
    </div>
  )
}

export default Blog
