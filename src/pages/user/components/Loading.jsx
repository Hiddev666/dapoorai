import girlIllustration2 from "../../../assets/girl-illustration2.svg"
import boyIllustration2 from "../../../assets/landing-illustration.svg"

const Loading = () => {
    return (
        <div className="flex flex-col gap-3 w-full justify-center items-center">
            <img src={girlIllustration2} alt="" className="w-45" />
            <div className="flex gap-1 items-center">
                <p>DapoorAI lagi bikin resepnya nih, tunggu bentar yaa</p>
                <p className="animate-magic">🍳</p>
            </div>
        </div>
    )
}

export default Loading
