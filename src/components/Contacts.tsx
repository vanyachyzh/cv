import { LocationIcon, MailIcon, TelegramIcon } from "../assets/icons"
import Block from "./Block"

const Contacts = () => {
    return (
        <Block className="relative">
            <h2 className="text-textSecondary text-base/[20px] mb-5">
                Contacts
            </h2>

            <div className="flex flex-col justify-center gap-6">
                <div className="flex justify-start items-center gap-3">
                    <div className="text-textSecondary bg-bgTertiary w-[40px] h-[40px] flex justify-center items-center rounded-full">
                        <MailIcon />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <span className="text-textSecondary text-sm/[16px]">
                            Email
                        </span>
                        <span className="text-textPrimary text-base/[20px] font-bold">
                            ivanchyzh.fe@gmail.com
                        </span>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-3">
                    <div className="text-textSecondary bg-bgTertiary w-[40px] h-[40px] flex justify-center items-center rounded-full">
                        <TelegramIcon />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <span className="text-textSecondary text-sm/[16px]">
                            Telegram
                        </span>
                        <a
                            target="_blank"
                            href="https://t.me/ivan_chyzh"
                            className="text-textAccent text-base/[20px] font-bold"
                        >
                            t.me/ivan_chyzh
                        </a>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-3">
                    <div className="text-textSecondary bg-bgTertiary w-[40px] h-[40px] flex justify-center items-center rounded-full">
                        <LocationIcon />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <span className="text-textSecondary text-sm/[16px]">
                            Address
                        </span>
                        <span className="text-textPrimary text-base/[20px] font-bold">
                            Ukraine, Odesa
                        </span>
                    </div>
                </div>
            </div>
        </Block>
    )
}

export default Contacts
