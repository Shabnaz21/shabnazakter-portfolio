// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
// import Swal from 'sweetalert2';

const Contact = () => {

    // const SERVICE_ID = "service_5343iga";
    // const TEMPLATE_ID = "template_2vbbb1n";
    // const PUBLIC_KEY = "OCC3TyMGypaByAnrH";

    // const form = useRef();

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    //         .then((result) => {
    //             console.log(result.text);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Message Sent Successfully'
    //             })
    //         }, (error) => {
    //             console.log(error.text);
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Ooops, something went wrong',
    //                 text: error.text,
    //             })
    //         });
    //     e.target.reset()
    // };

    return (
        <section name='contact'>
            <div className="Container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div
                    className="lg:w-2/5 md:w-1/2 bg-white rounded-lg  hidden 
                     sm:mr-10 p-10 md:flex items-end justify-start relative">
                    <img src="https://www.livecobu.com/hubfs/Illustrations%20(3).png" alt="" />
                </div>
                <div className="lg:w-3/5 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <div className="px-6 py-12 sm:py-24 lg:px-8">
                        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
                            <div className='flex place-content-center'>
                                <h1 className="pl-2 text-3xl mb-10 font-bold border-l-8
                             border-blue-400 md:text-5xl font-jost text-gray-950">
                                    Let's Talk
                                </h1>
                            </div>
                            <p className="mt-3 text-lg text-gray-600">Feature request? Suggestion? or maybe you'd like to be our critic! Here's a form just for that.</p>
                        </div>
                        <form action="mailto:shabnaz608@gmail.com" method="GET"  className="mx-auto mt-16 max-w-xl sm:mt-20">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className='form-control'>
                                    <label  className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                    <div className="mt-2.5">
                                        <input required="" type="text" name="first-name" id="first-name"
                                            autocomplete="given-name" placeholder="Your First Name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2
                                     text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                       focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className='form-control'>
                                    <label for="last-name"
                                        className="block text-sm 
                                        font-semibold leading-6 text-gray-900">Last name</label>
                                    <div className="mt-2.5">
                                        <input required="" type="text" name="last-name" id="last-name"
                                            autocomplete="family-name" placeholder="Your Last Name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 
                                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                     placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                     focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label for="subject" className="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
                                    <div className="mt-2.5">
                                        <input required="" type="text" name="text" id="email"
                                            
                                            placeholder="Your Mail Subject"
                                            className="block w-full rounded-md border-0 
                                            px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                    <div className="mt-2.5">
                                        <input required="" type="email" name="email" id="email"
                                            autocomplete="email"
                                            placeholder="Your Email Address"
                                            className="block w-full rounded-md border-0 
                                            px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label for="phone"
                                        className="block text-sm font-semibold leading-6
                                         text-gray-900">Phone number</label>
                                    <div className="mt-2.5">
                                        <input required="" type="tel" name="phone" id="phone"
                                            autocomplete="tel" placeholder="Your Phone Number"
                                            className="block w-full rounded-md border-0 px-3.5 py-2
                                             text-gray-900 shadow-sm ring-1 ring-inset
                                              ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                               focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                    <div className="mt-2.5">
                                        <textarea name="message" id="message" rows="4"
                                            placeholder="Share your message..."
                                            className="block w-full rounded-md border-0 px-3.5 py-2
                                             text-white shadow-sm ring-1 ring-inset ring-gray-300
                                              placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                               focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button type="submit"
                                    className="bg-[#272163] text-white rounded-lg
                             py-2 w-full block">Submit →</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
   
        </section>
    );
};

export default Contact;