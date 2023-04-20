import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faMedium,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div>
            {/* <div className="text-zinc-300 bg-[#100828]">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">
                        <div className="space-y-4 flex flex-col items-start justify-between">
                            <Image
                                src={"/assets/images/chaindeck-logo-header.svg"}
                                width={160}
                                height={80}
                                alt="Logo"
                            />
                            <p>
                                We are trusted from testing to full-scale
                                development!
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold">
                                Quick Links
                            </h4>
                            <div className="inline-flex flex-col font-semibold space-y-2">
                                <Link href={"#"}>About</Link>
                                <Link href={"#contact"}>Contact</Link>
                                <Link href={"#products"}>Services</Link>
                                <Link
                                    href="https://discord.gg/pRvGP8Xqzb"
                                    passHref
                                    target="_blank"
                                >
                                    Support
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold">
                                Subscription
                            </h4>
                            <p>
                                Subscribe to newsletter and stay up to date with
                                all updates
                            </p>
                            <form>
                                <div className="">
                                    <div className="relative mt-2 rounded-md shadow-sm max-w-sm">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="p-3 block w-full rounded-md bg-zinc-800 focus:bg-slate-800 border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="rounded-full bg-[#8763DE] mt-4 px-4 py-1.5 font-semibold text-md text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold">Follow Us</h4>
                            <div className="space-x-4">
                                <a
                                    href="https://chaindeck.medium.com/"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faMedium}
                                        style={{ fontSize: "28px" }}
                                    />
                                </a>
                                <a
                                    href="https://twitter.com/ChaindeckSocial"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        style={{ fontSize: "28px" }}
                                    />
                                </a>
                                <a
                                    href="https://discord.gg/pRvGP8Xqzb"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faDiscord}
                                        style={{ fontSize: "28px" }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="bg-[#110D2C]">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-center">
                    <div>
                        <p>Copyright &copy; 2023 CHAINDECK</p>
                    </div>
                    {/* <div className="space-x-4">
                        <Link href={"#"}>Terms</Link>
                        <Link href={"#"}>Privacy</Link>
                        <Link href={"#"}>Feedback</Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
