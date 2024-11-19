import { Layout } from "antd"

const { Footer: FooterAntd } = Layout

export default function Footer() {
    return (
      <FooterAntd className="h-12 flex items-center justify-center">
        <p>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </p>
      </FooterAntd>
    )
}