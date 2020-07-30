import React from 'react';

import {Columns,Card,Media, Image } from 'react-bulma-components';

export default function PortfolioListItem(props) {

    return(
        <>
        {props.items.map(item =>(

        
            <Columns.Column size={6}>
                <Card >
                    <Card.Header>
                        <Card.Header.Title>{item.title}</Card.Header.Title>
                    </Card.Header>

                    <Card.Content>
                        <Media>
                        <Media.Item renderAs="figure" >
                            <Image  alt={item.imgalt} src={item.imgSrc} />
                        </Media.Item>
                        </Media>
                    </Card.Content>
                    <Card.Footer>
                        <Card.Footer.Item renderAs="a" href={item.preview}>Preview</Card.Footer.Item>
                        <Card.Footer.Item renderAs="a" href={item.source}>Source Code</Card.Footer.Item>
                    </Card.Footer>
                </Card>
            </Columns.Column>
            ))}
            </>
    )}