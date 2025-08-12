
const Title = ({title}: {title : string}) => {
  return (
    <div className="w-full h-[150px] bg-[linear-gradient(to_right,rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url('/title.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h1 className="text-white text-4xl bg-gray-50/10 p-3 rounded-md">{title}</h1>
    </div>
  )
}

export default Title
