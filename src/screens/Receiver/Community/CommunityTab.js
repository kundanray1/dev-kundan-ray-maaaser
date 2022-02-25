import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Image,
} from "react-native";
import { CardText, CardTitle, ColCard, Container, Row, RowCard, RowNoPadding, Seperator, TextBlack, UserIconPlace } from "../../../utility/styledComponents";
import * as theme from "../../../constants/theme.js";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Block from "../../../components/Block";
import Ellipse from "../../../assets/images/Ellipse.png";
import Text from "../../../components/Text";
import LikeComponent from "../../../assets/icons/LikeComponent";
import CommentComponent from "../../../assets/icons/CommentComponent";
import ShareComponent from "../../../assets/icons/ShareComponent";

import NeedHelpFirstCard from "../../../components/NeedHelpFirstCard";
const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 3 }]

export function ExploreWitHookExamples() {

    return (
        <View style={{ flex: 1 }}>
            <CardTitle>Explore</CardTitle>
        </View>
    );
}

const CommunityTab = () => {
    const [index, setIndex] = useState(0);
    const handleIndexChange = index => {
        setIndex(index)
    };

    return (

        <View style={{ borderWidth: 0 }}>
            <SegmentedControlTab
                values={["Details", "Members", "Recent activities"]}
                selectedIndex={index}
                onTabPress={handleIndexChange}
                tabStyle={{ backgroundColor: 'transparent', borderWidth: 0, }}
                //   firstTabStyle={styles.firstTabStyle}
                //   lastTabStyle={styles.lastTabStyle}
                //   tabTextStyle={styles.tabTextStyle}
                tabTextStyle={{ color: theme.colors.gray, fontSize: 14, fontWeight: '400' }}
                activeTabStyle={{ borderBottomWidth: 2, backgroundColor: 'transparent', borderColor: theme.colors.primary2 }}
                activeTabTextStyle={{ color: theme.colors.primary2 }}


            />
            {index === 0
                && <Block>
                    <CardText>
                        Created date
                    </CardText>
                    <TextBlack>
                        8 Feb,2022
                    </TextBlack>
                    <Seperator />
                    <CardText>
                        Community Type
                    </CardText>
                    <TextBlack>
                        Public
                    </TextBlack>
                    <Seperator />
                    <CardText>
                        Tags
                    </CardText>
                    <TextBlack>
                        blacklives help
                    </TextBlack>
                </Block>
            }



            {index === 1
                && <>
                    {items.map((data, i) => {
                        return (<RowNoPadding key={i} style={{ justifyContent: 'flex-start' }}>
                            <UserIconPlace>
                                <Image source={Ellipse} style={{ borderRadius: 30 }} />
                            </UserIconPlace>
                            <Block>
                                <CardTitle>
                                    Anish Maharjan
                                </CardTitle>
                                <Text>
                                    Donor
                                </Text>
                            </Block>
                        </RowNoPadding>)
                    })}

                </>
            }




            {index === 2
                &&
                <>
                    <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                        <Image source={Ellipse} style={{ borderRadius: 30 }} />
                        <Block>
                            <CardTitle>
                                Anish Maharjan
                            </CardTitle>
                            <Text>
                                Donor
                            </Text>
                        </Block>
                    </View>
                    <RowCard style={{
                        paddingBottom: 0,
                        paddingTop: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        flexDirection: 'column',
                        borderBottomWidth: 1,
                        borderColor: theme.colors.gray2,

                    }}>

                        <NeedHelpFirstCard
                            image={"https://storage.googleapis.com/maaser_resources/4d69340daad24dffa4eca97152c9cf69.jpg"}
                            label={'Help hungry children'}
                            collectedAmount={'40'}
                            targetAmount={'150'}
                            onPress={() => {
                                console.log('post opened')
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 0.5, padding: 10, borderColor: theme.colors.gray2 }}>
                            <RowNoPadding style={{ minWidth: "30%" }}><LikeComponent /><CommentComponent /><ShareComponent /></RowNoPadding>
                            <RowNoPadding style={{ minWidth: "40%", justifyContent: "space-between" }}><CardText>3 comment</CardText><CardText>5 shares</CardText></RowNoPadding>
                        </View>
                    </RowCard>

                </>
            }
        </View>

    )
}


export default CommunityTab;