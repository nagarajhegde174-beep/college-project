function Card({ image, title, description }) {
  return (
    
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600 mt-2 text-sm">
          {description}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default function Nag() {

  const cards = [
    {
      id: 1,
      title: "Mountain View",
      description: "A beautiful mountain landscape with amazing scenery.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      id: 2,
      title: "Ocean Breeze",
      description: "Relaxing ocean waves under a golden sunset sky.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      id: 3,
      title: "Forest Adventure",
      description: "Explore the deep forest and reconnect with nature.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    }
  ]

  return (

<div>
  <nav className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      
      {/* Left Side - Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="w-10 h-10 object-cover rounded-full"
        />
        <h1 className="text-2xl font-bold text-red-600">
          Nagraj
        </h1>
      </div>

      {/* Center - Navigation */}
      <div className="flex gap-8">
        <button className="text-green-600 font-medium hover:text-green-700 transition">
          Home
        </button>
        <button className="text-green-600 font-medium hover:text-green-700 transition">
          Books
        </button>
        <button className="text-green-600 font-medium hover:text-green-700 transition">
          Contact
        </button>
      </div>

      {/* Right Side - Login */}
      <div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign in
        </button>
      </div>

    </nav>
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}

      </div>
    </div>
</div>

  )
}