import React from 'react'
import { Url } from './styles'

export const AffiliateLink = ({material_name, material_url}) => {
    return (
        <>
            <span>{material_name}</span>
            <br/>
            
            <Url href={material_url} target="_blank" rel="noopener noreferrer">{material_url}</Url>
            
        </>
    )
}

