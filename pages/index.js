import Head from "next/head";
import HeroNext from "@/components/HeroNext";
import LiveList from "@/components/LiveList";
import Layout from "@/components/layouts/Layout";
import Footer from "@/components/shared/Footer";
import { useState } from "react";
import ContactUsModal from "@/components/ContactUsModal";

export default function Home() {
    const [modalOn, setModalOn] = useState(false);

    return (
        <div>
            <Head>
                <title>Data Marketplace</title>
            </Head>

            <Layout>
                <div>
                    <div
                        className="bg-gradient-to-b from-[#151C38] to-[#083344]"
                        style={{
                            // height: "100%",
                            width: "100%",
                            backgroundImage: `linear-gradient(0deg, #100828 0%, #100828 100%)`,
                            clipPath: `ellipse(100% 55% at 48% 44%)`,
                            overflow: "hidden",
                        }}
                    >
                        <HeroNext />
                    </div>

                    <div className="bg-gradient-to-b from-[#110D2C] to-[#441960] py-16">
                        <h1 className="text-center text-5xl font font-semibold mb-8">
                            Banyan Bazaar
                        </h1>
                        <div className="px-4 md:px-8 text-xl space-y-8 text-center max-w-4xl mx-auto">
                            <p>
                                Introducing ChainDeck&apos;s Banyan Bazaar, a
                                user-friendly decentralized data marketplace
                                inspired by the remarkable Banyan trees of
                                India. With the strength and complexity of these
                                trees, Banyan Bazaar simplifies data sharing
                                while maintaining security and resilience.
                            </p>
                            <p>
                                Our platform allows you to access
                                blockchain-indexed data, complete with proofs,
                                for a wide range of applications such as supply
                                chain management, financial transactions, and
                                identity verification. Experience the power of
                                secure, efficient data exchange and unlock
                                endless possibilities with ChainDeck&apos;s
                                Banyan Bazaar.
                            </p>
                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={() => setModalOn(true)}
                                    className="rounded-full bg-[#8763DE] my-4 px-6 py-2 font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-b from-[#151C38] to-[#5B2468]"
                        style={{
                            // background: `linear-gradient(to bottom, #441960, #441960)`,
                            backgroundImage: `url('/assets/bg/wave-8.svg')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    >
                        <LiveList />
                    </div>
                    {/* <div>
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setModalOn(true)}
                                className="rounded-full bg-[#8763DE] my-4 px-6 py-2 font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div> */}

                    <Footer />

                    {modalOn && <ContactUsModal setModalOn={setModalOn} />}
                </div>
            </Layout>
        </div>
    );
}