import React, {useState} from 'react'
import clsx from 'clsx'
import HomeImg from './asset/house-1867187.jpg';

const sampleProperties = Array.from({length:8}).map((_,i)=>({
  id: i+1,
  title: `2 BHK Apartment ${i+1}`,
  city: ['Delhi','Gurgaon','Noida','Mumbai'][i%4],
  price: `${8 + i}k / month`,
  img: `https://picsum.photos/seed/prop${i+1}/600/400`
}))

function Navbar(){
  return (
    <header className="sticky top-0 z-50 w-full">
  <div className="flex items-center justify-between px-6 py-3 w-full">
    {/* Left side: Icon + Brand */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold">
        NB
      </div>
      <div className="font-semibold text-lg text-white">
        NoBroker<span className="text-gray-300">-inspired</span>
      </div>
    </div>

    {/* Center / optional nav */}
    <nav className="hidden md:flex items-center gap-6 text-sm text-white">
      <a className="hover:text-primary" href="#">Rent</a>
      <a className="hover:text-primary" href="#">Buy</a>
      <a className="hover:text-primary" href="#">Sell</a>
      <a className="hover:text-primary" href="#">Post Property</a>
    </nav>

    {/* Right side: Buttons */}
    <div className="flex items-center gap-3">
      <button className="hidden md:inline-block px-4 py-2 rounded-md border border-white text-white">
        Login
      </button>
      <button className="px-4 py-2 rounded-md bg-primary text-white">
        Sign up
      </button>
    </div>
  </div>
</header>
  )
}

function Hero({onSearch}){
  const [query,setQuery] = useState('')
  return (
    <section className="w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${HomeImg})` }}>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-8 items-center">
           <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Discover a place you'll love to live</h1>
           <div className="w-full max-w-lg bg-white rounded-full shadow-md flex items-center px-4 py-2 hover:shadow-lg transition-shadow duration-300">
              <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none px-4 py-2 rounded-full"
              placeholder="Search locality, city, or project"
              />
            <button
  onClick={() => onSearch(query)}
  className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
    />
  </svg>
</button>

        </div>

        </div>
      </div>
      </div>
    </section>
  )
}

function Features(){
  const items = [
    {title:'List for free', desc:'Owners can list without paying brokerage.'},
    {title:'Verified listings', desc:'Listings verified by our team.'},
    {title:'Schedule visits', desc:'Book visits directly with owners.'},
    {title:'Rental agreements', desc:'Download legal agreements.'}
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it,i)=>(
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm text-center">
            <div className="text-xl font-semibold mb-2">{it.title}</div>
            <div className="text-sm text-gray-600">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function PropertyCard({p}){
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{p.title}</div>
          <div className="text-sm text-gray-500">{p.city}</div>
        </div>
        <div className="mt-2 text-primary font-semibold">{p.price}</div>
        <div className="mt-3 flex items-center gap-2">
          <button className="px-3 py-1 rounded-md border text-sm">Contact Owner</button>
          <button className="px-3 py-1 rounded-md bg-primary text-white text-sm">Book Visit</button>
        </div>
      </div>
    </div>
  )
}

function PropertiesGrid({list}){
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Top listings</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map(p=> <PropertyCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-4">
        <div>
          <div className="font-semibold mb-2">NoBroker-inspired</div>
          <div>Build an awesome rental product.</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <div>About • Careers • Blog</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Support</div>
          <div>Contact • FAQ • Terms</div>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  const [list, setList] = useState(sampleProperties)
  function handleSearch(q){
    if(!q) return setList(sampleProperties)
    const lowered = q.toLowerCase()
    setList(sampleProperties.filter(p=> p.title.toLowerCase().includes(lowered) || p.city.toLowerCase().includes(lowered)))
  }
  return (
    <div className="min-h-screen bg-slate-50">
      {/* <Navbar /> */}
      <main>
        <Hero onSearch={handleSearch} />
        <PropertiesGrid list={list} />
        <Features />
      </main>
      <Footer />
    </div>
  )
}