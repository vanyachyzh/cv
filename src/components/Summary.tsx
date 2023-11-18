import { QuotesIcon } from "../assets/icons"
import Block from "./Block"

const Summary = () => {
    return (
        <Block className="relative">
            <p className="text-textPrimary">
                Adept at design thinking, I love studying and analyzing
                applications. I believe that design is the ability to fit into
                the user's shoes
            </p>

            <div className="absolute text-textSecondary right-0 bottom-[-23px]">
                <QuotesIcon />
            </div>
        </Block>
    )
}

export default Summary
