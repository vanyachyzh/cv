import bird from "./../assets/bird.jpg"
import Block from "./Block"

const Profile = () => {
    return (
        <Block className="flex justify-start items-center gap-4">
            <img
                src={bird}
                width={80}
                height={80}
                className="rounded-full"
                alt="Ivan Chyzh"
            />
            <div className="flex flex-col justify-center gap-2">
                <span className="text-textPrimary text-2xl/[28px] font-bold">
                    Ivan Chyzh
                </span>
                <span className="text-textSecondary text-base/[20px]">
                    Frontend Developer
                </span>
            </div>
        </Block>
    )
}

export default Profile
