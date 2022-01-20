import React from 'react'
import { CopyRight, FooterCont, IconLink, SocialMediaIcon } from './styles'

export const Footer = () => {
    return (
<>
    <FooterCont >
        <SocialMediaIcon>
            <IconLink href="   ">
                <i className="fab fa-facebook-f"></i>
            </IconLink>
            <IconLink href="   ">
                <i className="fab fa-twitter"></i>
            </IconLink>
            <IconLink href="   ">
                <i className="fab fa-instagram"></i>
            </IconLink>
            <IconLink href="   ">
                <i className="fab fa-youtube"></i>
            </IconLink>
        </SocialMediaIcon>
        <CopyRight>© 2022 Aidooit</CopyRight>
    </FooterCont>
</>
)
}


