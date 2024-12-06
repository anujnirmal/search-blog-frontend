import { Separator } from "@/components/ui/separator"

const Header = () => {
  return (
    <>
     <a href='/' className='cursor-pointer'><h1 className='text-blue-950 text-2xl bold'>Bloggy Box</h1></a>
     <Separator className='mt-4'/>
    </>
  )
}

export default Header