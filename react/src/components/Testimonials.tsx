import ReviewsCard from "./ReviewsCard"

interface ReviewsData {
  review: string,
  name: string,
  star: number
}

const reviews:ReviewsData[] = [
  { 
    review: "They are very Amazing, we enjoyed our Holidays a lot with them, we explored many things during tour and know about new things. I recommended you to travel with them.",
    name: "_Faizan_",
    star: 3
  },
  { 
    review: "We enjoyed our Holidays a lot with them, we explored many things during tour. their services were very nice. I recommended you to travel with them.",
    name: "_Ahmad_",
    star: 5
  },
  { 
    review: "They are very Amazing, we explored many things during tour. go with them and see the World. I recommended you to travel with them.",
    name: "_Maiz_Khan_",
    star: 4
  },
]

const Testimonials = () => {
  return (
    <div className="bg-gray-100 px-8 md:px-16 lg:px-24 py-6">
      <h3 className="text-2xl mb-8">People say the nicest things…</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review, index) => (
          <ReviewsCard key={index} review={review.review} name={review.name} star={review.star} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
