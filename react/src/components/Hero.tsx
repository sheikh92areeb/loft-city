
const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat max-sm:px-5">
        <div className="bg-gray-50/70 text-center px-10 py-5 rounded-lg">
            <h1 className="text-3xl sm:text-5xl font-medium mb-6">'Loft City,</h1>
            <p className="text-xl sm:text-3xl">"Feel at Home When Your're Away"</p>
        </div>
    </div>
  )
}

export default Hero
