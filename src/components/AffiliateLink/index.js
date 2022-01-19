import React from 'react'

export const AffiliateLink = ({material_name, material_url}) => {
    return (
        <div>
            <span>{material_name}</span>
            <a href={material_url} target="_blank" rel="noopener noreferrer">{material_url}</a>
        </div>
    )
}

