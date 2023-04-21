import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ContactUsModal({ setModalOn }) {
    return (
        <div className="opacity-100 fixed inset-0 z-50 backdrop-blur-md">
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col justify-center bg-[#270B38] py-8 px-12 rounded-xl shadow-lg">
                    <div className="flex justify-end -mt-2 mb-4">
                        <div className="cursor-pointer border-2 border-transparent active:border-zinc-400 rounded p-1">
                            <XMarkIcon
                                className="h-7 w-7"
                                aria-hidden="true"
                                onClick={() => setModalOn(false)}
                            />
                        </div>
                    </div>

                    <div className="space-y-6" id="contact">
                        <div>
                            <h3 className="mx-auto text-center text-3xl font-bold">
                                Contact Us
                            </h3>
                        </div>

                        <form
                            className="min-w-[320px]"
                            name="contact"
                            method="POST"
                            // action="/?success=true"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div hidden>
                                <input name="bot-field" />
                            </div>

                            <div className="space-y-4">
                                <div className="">
                                    <label
                                        htmlFor="name"
                                        className="block font-medium text-zinc-300"
                                    >
                                        Name
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="p-2 block w-full rounded-md bg-zinc-800 focus:bg-slate-800 border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Full name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className="block font-medium text-zinc-300"
                                    >
                                        Email
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="p-2 block w-full rounded-md bg-zinc-800 focus:bg-slate-800 border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="message"
                                        className="block font-medium text-zinc-300"
                                    >
                                        Message
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <textarea
                                            rows={4}
                                            type="text"
                                            name="message"
                                            id="message"
                                            className="p-2 block w-full rounded-md bg-zinc-800 focus:bg-slate-800 border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Your message"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="rounded-full bg-[#8763DE] mt-8 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
