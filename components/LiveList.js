import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function LiveList() {
    return (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 py-12 md:py-16 lg:py-24">
            <div className="max-w-4xl mx-auto space-y-8">
                <h5 className="text-center font-bold text-3xl">
                    Coming soon on
                </h5>
                {/* <div className="flex gap-12 flex-wrap items-center justify-center">
                    <Image
                        src={"/assets/images/ethereum.svg"}
                        height={80}
                        width={180}
                        alt="img-01"
                    />
                    <Image
                        src={"/assets/images/polygon-logo.svg"}
                        height={80}
                        width={180}
                        alt="img-01"
                    />
                    <Image
                        src={"/assets/images/bsc-logo.svg"}
                        height={80}
                        width={180}
                        alt="img-01"
                    />
                    <Image
                        src={"/assets/images/avalance-logo.png"}
                        height={80}
                        width={180}
                        alt="img-01"
                    />
                    <Image
                        src={"/assets/images/arbitrum.webp"}
                        height={80}
                        width={180}
                        alt="img-01"
                    />
                    <Image
                        src={"/assets/images/optimism.png"}
                        height={80}
                        width={180}
                        alt="img-01"
                    />
                </div> */}
                <div className="flex gap-12 flex-wrap items-center justify-center">
                    <Marquee gradientColor={false} speed={50}>
                        <Image
                            src={"/assets/images/ethereum.svg"}
                            height={110}
                            width={220}
                            className="px-8"
                            alt="ethereum"
                        />
                        <Image
                            src={"/assets/images/polygon-logo.svg"}
                            height={100}
                            width={200}
                            className="px-8"
                            alt="polygon"
                        />
                        <Image
                            src={"/assets/images/bsc-logo.svg"}
                            height={90}
                            width={180}
                            className="px-8"
                            alt="bsc"
                        />
                        <Image
                            src={"/assets/images/avalance-logo.png"}
                            height={120}
                            width={240}
                            className="px-8"
                            alt="avalance"
                        />
                        <Image
                            src={"/assets/images/arbitrum.webp"}
                            height={140}
                            width={280}
                            className="px-8"
                            alt="arbitrum"
                        />
                        <Image
                            src={"/assets/images/optimism.png"}
                            height={110}
                            width={220}
                            className="px-8"
                            alt="optimism"
                        />
                        {/* <div className="flex items-center gap-12"></div> */}
                    </Marquee>
                </div>

                {/* <div className="max-w-4xl mx-auto py-12 border">
                    <Swiper
                        spaceBetween={30}
                        // slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 100,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <SwiperSlide>
                            <Image
                                src={"/assets/images/ethereum.svg"}
                                height={80}
                                width={180}
                                alt="img-01"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/assets/images/polygon-logo.svg"}
                                height={80}
                                width={180}
                                alt="img-01"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/assets/images/bsc-logo.svg"}
                                height={80}
                                width={180}
                                alt="img-01"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/assets/images/avalance-logo.png"}
                                height={80}
                                width={180}
                                alt="img-01"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/assets/images/arbitrum.webp"}
                                height={80}
                                width={180}
                                alt="img-01"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/assets/images/optimism.png"}
                                height={80}
                                width={180}
                                alt="img-01"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div> */}

                {/* <marquee behavior="" direction="">
                    <div className="flex items-center gap-8">
                        <Image
                            src={"/assets/images/ethereum.svg"}
                            height={80}
                            width={180}
                            alt="img-01"
                        />
                        <Image
                            src={"/assets/images/polygon-logo.svg"}
                            height={80}
                            width={180}
                            alt="img-01"
                        />
                        <Image
                            src={"/assets/images/bsc-logo.svg"}
                            height={80}
                            width={180}
                            alt="img-01"
                        />
                        <Image
                            src={"/assets/images/avalance-logo.png"}
                            height={80}
                            width={180}
                            alt="img-01"
                        />
                        <Image
                            src={"/assets/images/arbitrum.webp"}
                            height={80}
                            width={180}
                            alt="img-01"
                        />
                        <Image
                            src={"/assets/images/optimism.png"}
                            height={80}
                            width={180}
                            alt="img-01"
                        />
                    </div>
                </marquee> */}
            </div>
        </div>
    );
}
