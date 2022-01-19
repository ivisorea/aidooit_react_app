import React from 'react'
import { CopyRight, FooterCont, IconLink, SocialMediaIcon } from './styles'

export const Footer = () => {
    return (
        <>
        <FooterCont >
            <nav>
                <ul>
                    <li>
                        <IconLink href="
                        ">
                            About
                        </IconLink>
                    </li>
                    <li>
                        <IconLink href="
                        ">
                            Contact
                        </IconLink>
                    </li>
                    <li>
                        <IconLink href="
                        ">
                            Terms
                        </IconLink>
                    </li>
                    <li>
                        <IconLink href="
                        ">
                            Privacy
                        </IconLink>
                    </li>   
                </ul>
            </nav>
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
            
        </FooterCont>
        <CopyRight>© 2022 Aidooit</CopyRight>
        </>
    )
}


