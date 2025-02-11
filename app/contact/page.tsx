'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { IoIosSend } from 'react-icons/io';
import { FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLocationDot, FaPhone } from 'react-icons/fa6';

export interface ContactFormFields {
  name: string,
  email: string,
  message: string,
  interest: string
}

export default function ContactForm() {

  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<ContactFormFields>({
    defaultValues: {
      interest: 'Solidity Developer',
    },
  });

  const interests = [
    'Solidity Developer',
    'Security audits',
    'Smart Contract Engineer web3',
    'Security Engineer',
    'Other',
  ];

  const onSubmit = async (data: ContactFormFields) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        toast.error(result.message);
        return;
      }
      
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error((error as Error).message);
    }
  };


  const selectedInterest = watch('interest');

  return (
    <div className="min-h-screen  bg-[#2e024a] md:p-14 py-4 px-2 ">
      <div className="max-w-[1800px] w-full flex flex-col md:flex-row gap-8">
        <div className="text-white md:w-1/2">
          <h1 className="text-4xl sm:text-[48px] font-bold leading-[51px] ">
            Let's discuss <br />
            on something <span className="text-[#a80f78]">cool</span><br />
            together
          </h1>

          <div className="space-y-8 md:text-xl mt-10 sm:mt-20">
            <div className="pl-4 flex items-center gap-3">
              <FiMail className="text-[#a80f78]" />
              <span>rushikesh@zeropointlabs.in</span>
            </div>
            <div className="flex items-center gap-3 bg-[#42064f] border-2 border-[#a80f78] w-fit p-4 rounded-xl pr-16 sm:pr-44">
              <FaPhone className="text-[#a80f78] fill" />
              <span>+123 456 789</span>
            </div>
            <div className="pl-4 flex items-center gap-3">
              <FaLocationDot className="text-[#a80f78]" />
              <span>123 Street 456 House</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-5 md:mt-60">
            <a href="#" className=" transition-colors">
              <FaFacebookF className='text-[28px] fill-white w-5 h-5' />
            </a>
            <a href="#" className="text-white p-4 rounded-full bg-[#a80f78] hover:text-violet-300 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="bg-[#ededed] rounded-lg p-8 md:w-1/2 h-fit md:m-0 mx-4">
          <h3 className="mb-6 font-medium">I'm interested in...</h3>

          <div className="flex flex-wrap sm:grid grid-cols-3 gap-2 mb-3">
            {interests.slice(0, 3).map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => setValue('interest', interest)}
                className={`px-4 py-2 rounded-lg  transition-colors font-medium ${selectedInterest === interest ? 'bg-[#a80f78] text-white' : 'text-[#2E02494D] rounded-xl border-2 border-[#2E02494D]'}  hover:bg-gray-200'}`}
              >
                {interest}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mb-6">
            {interests.slice(3).map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => setValue('interest', interest)}
                className={`px-4 py-2 rounded-lg  transition-colors font-medium ${selectedInterest === interest ? 'bg-[#a80f78] text-white' : 'text-[#2E02494D] rounded-xl border-2 border-[#2E02494D]'}  hover:bg-gray-200'}`}
              >
                {interest}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-14 font-semibold mt-12">
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border-b-2 bg-transparent border-gray-300 pb-2 focus:outline-none focus:border-[#a80f78]"
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 3, message: 'Please Enter Valid Name' }
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-b-2 bg-transparent border-gray-300 pb-2 focus:outline-none focus:border-[#a80f78]"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Your message"
                rows={1}
                className="w-full border-b-2 bg-transparent border-gray-300 pb-2 focus:outline-none focus:border-[#a80f78] resize-none  !max-h-[168px]"
                onInput={(e) => {
                  const textarea = e.target as HTMLTextAreaElement;
                  textarea.style.height = "auto"; // Reset height
                  textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height
                }}
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-fit !mt-40 px-10 py-4 bg-[#a80f78] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-pink-700 transition-colors ${isSubmitting && 'opacity-30'}`}
            >
              <IoIosSend className="w-6 h-6" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}