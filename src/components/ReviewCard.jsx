const ReviewCard = ({imgURL,customerName,rating,feedback}) =>
{
  return (
      <div className="flex justify-center items-center flex-col">
          <img src={imgURL} alt="customer"
          className="object-cover w-[120px] h-[120px] rounded-full"
          />
    </div>
  )
}

export default ReviewCard