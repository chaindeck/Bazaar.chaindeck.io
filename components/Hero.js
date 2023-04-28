import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative">
            <div>
                <Image
                    src={"/assets/bg/tree-pjpeg.jpg"}
                    height={2000}
                    width={2000}
                    className="w-full h-full"
                    alt="Tree"
                />

                <div className="absolute flex flex-col items-center justify-end md:justify-start md:mt-8 xl:mt-12 md:items-start md:pl-8 xl:pl-12 h-full w-full top-0">
                    <div className="flex flex-col justify-center">
                        <Image
                            src={"/assets/images/chaindeck-logo-header.svg"}
                            height={100}
                            width={200}
                            className="mb-4 hidden md:block"
                            alt="Chaindeck Logo"
                        />
                        <h3 className="text-center text-3xl font-bold leading-tight">
                            Banyan Bazaar
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
