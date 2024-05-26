'use client'

import { createProduct } from '@/actions/products-actions'
import { useRef } from 'react'
import { toast } from 'sonner'

export default function ClientPage() {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div className='flex justify-center items-center h-screen min-w-[400px]'>
      <form
        ref={formRef}
        className='min-w-[400px]'
        action={async (formData) => {
          const product = await createProduct(formData)
          toast.success(`Product created: ${product?.name} $${product?.price}`)
          formRef.current?.reset()
        }}
      >
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
