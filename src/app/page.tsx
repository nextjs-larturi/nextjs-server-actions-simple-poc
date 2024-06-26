import { createProduct } from '@/actions/products-actions'

export default function HomePage() {
  return (
    <div className='flex justify-center items-center h-screen min-w-[400px]'>
      <form className='min-w-[400px]' action={createProduct}>
        <input
          type='text'
          placeholder='Name'
          name='productName'
          className='border border-gray-300 rounded-md p-2 block w-full mb-4'
        />
        <input
          type='text'
          placeholder='Price'
          name='productPrice'
          className='border border-gray-300 rounded-md p-2 block w-full'
        />
        <button className='bg-purple-500 text-white p-2 rounded-md mt-4 block w-full'>Save</button>
      </form>
    </div>
  )
}
