import { Link } from "react-router-dom"
import FacebookAsset from "./asset/FacebookAsset"
import InstarAsset from "./asset/InstarAsset"
import NaverAsset from "./asset/NaverAsset"
import KaKaoAsset from "./asset/KaKaoAsset"

export default function LeftSide() {
    const SNS_ITEMS = [
        {icon: <FacebookAsset />, link: "https://facebook.com"},
        {icon: <InstarAsset />, link: "https://www.instagram.com/"},
        {icon: <NaverAsset />, link: "https://www.naver.com/"},
        {icon: <KaKaoAsset />, link: "http://www.kakao.com"},
    ]
 return <div className="flex flex-col w-full space-y-6 items-center">
    {SNS_ITEMS.map(({icon, link}) => (
        <Link to={link} key={link}>
            <div className="border border-neuturar-300 rounded-full flex justify-center items-center group overflow-hidden">
                {icon}
            </div>
        </Link>
    ))}
 </div>

}