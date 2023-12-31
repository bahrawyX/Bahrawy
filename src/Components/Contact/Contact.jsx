import React, { useEffect, useRef } from 'react'
import styles from './Contact.module.css'
import { useForm } from "@formspree/react";
import Design2 from '../Particles/Design2'
import IntialTransition from '../Cool/IntialTransition';
import HoverEffect from '../Hover/HoverEffect';
import Footer from '../Footer/Footer';

function Contact() {
    const [state, handleSubmit] = useForm("mzblowov");
    const form = useRef();

    useEffect(() => {
        if (state.succeeded) {
            resetForm(); // Clear form fields on successful submission
        }
    }, [state.succeeded]);

    const resetForm = () => {
        form.current.reset(); // Reset form fields
    };

    return (
        <div className={styles.contactAllContainer}>
            <IntialTransition Title="Contact" />
            <Design2 />
            <div className={styles.Container}>
                <div className={styles.Header}>
                    <div className="left flex  ">
                        <HoverEffect>

                            <h2 className={`SectionHeadName ${styles.marTest}`}><span>#</span>Contact</h2>
                        </HoverEffect>
                    </div>
                </div>
                <div className={`${styles.contactMe}  flex items-center justify-between`}>
                    <div className={`${styles.form}`}>
                        <form action="https://formspree.io/f/mzblowov" className='' ref={form} onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">Your Name</label>
                                <input name="name" className=" px-4 py-2 text-gray-700 bg-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded" type="text" id="firstName" placeholder="Enter your first name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Your Email</label>
                                <input name="email" className=" px-4 py-2 text-gray-700 bg-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded" type="email" id="email" placeholder="Enter your email address" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">Your Message</label>
                                <textarea name='message' cols={40} rows={5} className="w-full resize-none  px-4 py-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:ring focus:ring-indigo-300 focus:outline-none" id="message" placeholder="Enter your message"></textarea>

                            </div>


                            <input type="submit" className={`Button up`} />

                            {state.errors ? (
                                <p className="text-red-500 text-[1.2rem]">
                                    {state.errors.getFormErrors().length
                                        ? state.errors.getFormErrors()[0].message
                                        : state.errors.getAllFieldErrors().length
                                            ? state.errors.getAllFieldErrors()[0][1][0].message
                                            : ""}
                                </p>
                            ) : state.succeeded ? (
                                <p className="hot mt-4 text-[1rem]">
                                    Form is sended sucessfully!
                                </p>
                            ) : (
                                ""
                            )}
                        </form>
                    </div>
                    <div className={`${styles.contactLinksContainer}`}>
                        <h2 className={styles.messageTitle}>Message me here:</h2>
                        <div className={styles.Box}>

                            <a href="https://discordapp.com/users/664495807772360716">
                                <div className="contactIcon flex items-center my-4 ">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.1641 7.65906C22.543 6.87826 20.8325 6.32099 19.0751 6.00114C19.0592 5.99832 19.0428 6.00076 19.0283 6.0081C19.0137 6.01544 19.0017 6.02733 18.9938 6.04214C18.7735 6.45211 18.5298 6.98835 18.3595 7.40816C16.4651 7.10643 14.5383 7.10643 12.6439 7.40816C12.4539 6.9405 12.239 6.48443 12.0002 6.04214C11.9922 6.02749 11.9801 6.01574 11.9656 6.00842C11.9511 6.0011 11.9348 5.99856 11.9189 6.00114C10.1611 6.31928 8.45021 6.87684 6.82991 7.65906C6.81605 7.66461 6.80445 7.67504 6.7971 7.68858C3.55651 12.7706 2.66745 17.7279 3.10339 22.623C3.10495 22.6459 3.11901 22.6689 3.1362 22.6836C5.02325 24.1507 7.13396 25.2708 9.37832 25.9962C9.39417 26.0014 9.4112 26.0013 9.42693 25.9957C9.44267 25.99 9.45629 25.9793 9.46582 25.965C9.94707 25.2763 10.3752 24.5498 10.7439 23.7856C10.7516 23.7699 10.7543 23.752 10.7514 23.7345C10.7486 23.7171 10.7405 23.7011 10.7283 23.6889C10.7202 23.6809 10.7107 23.6747 10.7002 23.6708C10.027 23.3993 9.37503 23.0731 8.7502 22.6951C8.73275 22.6847 8.71977 22.6677 8.71395 22.6476C8.70814 22.6274 8.70993 22.6057 8.71895 22.5869C8.72427 22.5747 8.73231 22.564 8.74239 22.5557C8.87364 22.4524 9.00489 22.3442 9.12989 22.236C9.14093 22.2266 9.15418 22.2206 9.16821 22.2186C9.18225 22.2166 9.19655 22.2186 9.20957 22.2245C13.3017 24.1858 17.7314 24.1858 21.7735 22.2245C21.787 22.2183 21.8018 22.2162 21.8164 22.2182C21.831 22.2202 21.8448 22.2264 21.8563 22.236C21.9813 22.3442 22.1126 22.4524 22.2438 22.5557C22.2544 22.5639 22.263 22.5747 22.2687 22.5872C22.2744 22.5996 22.277 22.6134 22.2764 22.6272C22.2758 22.641 22.2719 22.6544 22.2651 22.6663C22.2584 22.6781 22.2489 22.688 22.2376 22.6951C21.6142 23.0765 20.9614 23.4024 20.286 23.6692C20.2752 23.6733 20.2655 23.6798 20.2574 23.6883C20.2493 23.6968 20.243 23.7071 20.2391 23.7184C20.2355 23.7294 20.2341 23.741 20.2349 23.7525C20.2357 23.7641 20.2387 23.7754 20.2438 23.7856C20.6188 24.5482 21.0485 25.2763 21.5204 25.965C21.5299 25.9793 21.5435 25.99 21.5593 25.9957C21.575 26.0013 21.592 26.0014 21.6079 25.9962C23.856 25.2731 25.9701 24.1528 27.8594 22.6836C27.8688 22.6768 27.8767 22.6677 27.8824 22.6572C27.8881 22.6467 27.8914 22.635 27.8922 22.623C28.4141 16.9637 27.0188 12.0474 24.1954 7.69022C24.1925 7.68302 24.1883 7.67653 24.1829 7.67116C24.1775 7.66579 24.1711 7.66167 24.1641 7.65906ZM11.3549 19.6417C10.1221 19.6417 9.10801 18.4544 9.10801 16.9982C9.10801 15.5403 10.1033 14.353 11.3549 14.353C12.6158 14.353 13.6205 15.5502 13.6017 16.9982C13.6017 18.4544 12.6064 19.6417 11.3549 19.6417ZM19.661 19.6417C18.4298 19.6417 17.4142 18.4544 17.4142 16.9982C17.4142 15.5403 18.4095 14.353 19.661 14.353C20.922 14.353 21.9282 15.5502 21.9079 16.9982C21.9079 18.4544 20.922 19.6417 19.661 19.6417Z" />
                                    </svg>

                                    <span className='icontext'>Bahrawy#4566</span>
                                </div>
                            </a>

                            <a href="mailto:abbahrawy@gmail.com">
                                <div className="contactIcon flex items-center my-4 ">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" />
                                    </svg>

                                    <span className='icontext'>abbahrawy@gmail.com</span>
                                </div>
                            </a>

                            <a href="">
                                <div className="contactIcon flex items-center my-4">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27 15.5C27 18.55 25.7884 21.4751 23.6317 23.6317C21.4751 25.7884 18.55 27 15.5 27C12.45 27 9.52494 25.7884 7.36827 23.6317C5.2116 21.4751 4 18.55 4 15.5C4 12.45 5.2116 9.52494 7.36827 7.36827C9.52494 5.2116 12.45 4 15.5 4C18.55 4 21.4751 5.2116 23.6317 7.36827C25.7884 9.52494 27 12.45 27 15.5ZM15.9126 12.4899C14.7942 12.9556 12.5574 13.9187 9.20519 15.3792C8.66181 15.5949 8.37575 15.8076 8.34987 16.0146C8.30675 16.3639 8.74519 16.5019 9.34175 16.6903L9.59331 16.7693C10.1798 16.9605 10.9704 17.1833 11.3801 17.1919C11.7539 17.2006 12.1693 17.0482 12.6279 16.7319C15.7602 14.6174 17.3774 13.5493 17.478 13.5263C17.5499 13.5091 17.6505 13.4889 17.7166 13.5493C17.7842 13.6083 17.777 13.7218 17.7698 13.752C17.7267 13.9374 16.006 15.5359 15.1162 16.3639C14.8387 16.6227 14.6418 16.8053 14.6016 16.8469C14.5129 16.9375 14.4228 17.0267 14.3313 17.1143C13.7851 17.6404 13.3768 18.0343 14.3529 18.6783C14.8229 18.9888 15.1996 19.2432 15.5747 19.4991C15.983 19.778 16.3912 20.0554 16.9202 20.4033C17.0539 20.4896 17.1833 20.583 17.3084 20.6721C17.7842 21.0114 18.214 21.3161 18.7416 21.2673C19.0492 21.2385 19.3669 20.951 19.5279 20.0885C19.9088 18.0516 20.6578 13.6399 20.8302 11.8214C20.8408 11.6703 20.8345 11.5184 20.8116 11.3686C20.798 11.2478 20.7395 11.1364 20.6477 11.0567C20.5169 10.9664 20.361 10.9196 20.2021 10.923C19.7708 10.9302 19.1052 11.1616 15.9126 12.4899Z" />
                                    </svg>

                                    <span className='icontext'>+20 1095804038</span>
                                </div>
                            </a>

                            <a href="https://github.com/bahrawyX">
                                <div className="contactIcon flex items-center my-4">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" />
                                    </svg>

                                    <span className='icontext'>BahrawyX</span>
                                </div>
                            </a>
                            <a href="">

                                <div className="contactIcon flex items-center ml-1 my-4">
                                    <svg fill="#000000" height="25px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xmlSpace="preserve">
                                        <g id="XMLID_468_">
                                            <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z" />
                                            <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z" />
                                        </g>
                                    </svg>
                                    <span className='icontext'>+20 1095804038</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/abdelrahman-el-bahrawy-05948217b/">
                                <div className="contactIcon flex items-center my-4">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z" />
                                    </svg>
                                    <span className='icontext'>Abdelrahman El-Bahrawy</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>






            </div>

            <div className={styles.Container}>
                <div className="flex justify-center items-center">
                    <div className={`${styles.test} ${styles.Left}`}>
                        <p>I’m free for freelance opportunities,half time job or remoting jobs . However, if you have other request or question, don’t hesitate to contact me</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact