import Image from "next/image"

const loading = () => {
  return (
    <div className="flex justify-center items-center py-8">
        <Image alt="is loading..." width={250} height={250} src={"/loading.svg"}/>
    </div>
  )
}

export default loading