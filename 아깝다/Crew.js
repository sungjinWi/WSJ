import * as React from 'react';
import { Avatar, Button, Grid, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import styledcompoent from 'styled-components';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:"black",
  color: "white", 
  width: "19.8rem", 
  border: "2px solid white", 
  ...theme.typography.body2,
  display:"flex" , 
  textAlign: 'center',
  justifyContent:"center",
}));

const StyledAvatar = styled(Avatar)(() => ({
  position: "relative", 
  top: "2rem", 
  border: "7px solid white", 
  width: "8rem", 
  height: "8rem"
}));

const ContainerStyle = styledcompoent.div`
   .container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    position: relative;
    background-color: black;
  }

  .mainContents {
    width: 88%;
    height: 98%;
  }

  .splide {
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 2%;
  }

  .splide__arrow {
    width: 3em;
    height: 3em;
  }
  
  .arrow {
    width: 6rem;
    height: 6rem;
  }

  .crewFooter {
    font-family: 'Permanent Marker', cursive;
    display: flex;
    justify-content : space-between;
  }

  .crewFooterContent {
    display: inline-block;
    font-size: 1.2rem;
    margin: 20px;
  }

  .crewContent {
    font-size: 1rem;
    height: 6rem;
    border-top: 0;
    border-bottom: 0;
  }

  .crewHeader {
    font-family: 'Permanent Marker', cursive;
    font-size: 1.2rem;
    height: 6rem; 
    padding-top: 4rem;
    border-bottom: 0;
  }
`
const crewFooterContainer = { height: "13rem", 
  borderTop:0, 
  flexDirection:"column", 
  justifyContent: "space-around", 
  flexWrap: "wrap" 
};

const Test = () => {
  return(
      <Splide
        options={ {
        rewind: true,
        perPage : 4,
        width : "100%",
        gap   : 0,
        } }
      >
        <SplideSlide>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item sx={{ height: "8rem" }} square >
              <StyledAvatar src="/img/crewprofile/jeanx.jpg"></StyledAvatar>
            </Item>
            <Item className='crewHeader' square >
              Creative Director
              <br/>
              jeanx#0001
            </Item>
            <Item className='crewContent' square >
              “그 누구도 막을 수 없게 될 거요···!!! 
              <br/>
              폭주하는 이 시대를!!!”
            </Item>
            <Item sx={crewFooterContainer} square >
              <div style={{width:"100%"}}>
                <img className='arrow' src='/img/Arrow.png'/>
              </div>
              <div className='crewFooter'>
                <div className='crewFooterContent'>
                  @Dogedoil
                </div>
                <div className='crewFooterContent'>
                  follow
                </div>
              </div>
            </Item>
          </Grid>
        </SplideSlide>
        <SplideSlide>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item sx={{ height: "8rem" }} square >
              <StyledAvatar src="/img/crewprofile/benbeckat.jpg"></StyledAvatar>
            </Item>
            <Item className='crewHeader' square >
              rapper
              <br/>
              ben beckat#0002
            </Item>
            <Item className='crewContent' square >
              “그 누구도 막을 수 없게 될 거요···!!! 
              <br/>
              폭주하는 이 시대를!!!”
            </Item>
            <Item sx={crewFooterContainer} square >
              <div style={{width:"100%"}}>
                <img className='arrow' src='/img/Arrow.png'/>
              </div>
              <div className='crewFooter'>
                <div className='crewFooterContent'>
                  @Jhin_93
                </div>
                <div className='crewFooterContent'>
                  follow
                </div>
              </div>
            </Item>
          </Grid>
        </SplideSlide>
        <SplideSlide>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item sx={{ height: "8rem" }} square >
              <StyledAvatar src="/img/crewprofile/woogi.jpg"></StyledAvatar>
            </Item>
            <Item className='crewHeader' square >
              winboong
              <br/>
              woogi#0003
            </Item>
            <Item className='crewContent' square >
              “그 누구도 막을 수 없게 될 거요···!!! 
              <br/>
              폭주하는 이 시대를!!!”
            </Item>
            <Item sx={crewFooterContainer} square >
              <div style={{width:"100%"}}>
                <img className='arrow' src='/img/Arrow.png'/>
              </div>
              <div className='crewFooter'>
                <div className='crewFooterContent'>
                  @Dogedoil
                </div>
                <div className='crewFooterContent'>
                  follow
                </div>
              </div>
            </Item>
          </Grid>
        </SplideSlide>
        <SplideSlide>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item sx={{ height: "8rem" }} square >
              <StyledAvatar src="/img/1.png"></StyledAvatar>
            </Item>
            <Item className='crewHeader' square >
              winboong
              <br/>
              wonny#0004
            </Item>
            <Item className='crewContent' square >
              “그 누구도 막을 수 없게 될 거요···!!! 
              <br/>
              폭주하는 이 시대를!!!”
            </Item>
            <Item sx={crewFooterContainer} square >
              <div style={{width:"100%"}}>
                <img className='arrow' src='/img/Arrow.png'/>
              </div>
              <div className='crewFooter'>
                <div className='crewFooterContent'>
                  @Dogedoil
                </div>
                <div className='crewFooterContent'>
                  follow
                </div>
              </div>
            </Item>
          </Grid>
        </SplideSlide>
        <SplideSlide>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item sx={{ height: "8rem" }} square >
              <StyledAvatar src="/img/1.png"></StyledAvatar>
            </Item>
            <Item className='crewHeader' square >
              winboong
              <br/>
              jingbe#0005
            </Item>
            <Item className='crewContent' square >
              “그 누구도 막을 수 없게 될 거요···!!! 
              <br/>
              클레이 다이노의 떡상을!!!”
            </Item>
            <Item sx={crewFooterContainer} square >
              <div style={{width:"100%"}}>
                <img className='arrow' src='/img/Arrow.png'/>
              </div>
              <div className='crewFooter'>
                <div className='crewFooterContent'>
                  @Dogedoil
                </div>
                <div className='crewFooterContent'>
                  follow
                </div>
              </div>
            </Item>
          </Grid>
        </SplideSlide>
        <SplideSlide>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item sx={{ height: "8rem" }} square >
              <StyledAvatar src="/img/1.png"></StyledAvatar>
            </Item>
            <Item className='crewHeader' square >
              winboong
              <br/>
              sky#0006
            </Item>
            <Item className='crewContent' square >
              “그 누구도 막을 수 없게 될 거요···!!! 
              <br/>
              폭주하는 이 시대를!!!”
            </Item>
            <Item sx={crewFooterContainer} square >
              <div style={{width:"100%"}}>
                <img className='arrow' src='/img/Arrow.png'/>
              </div>
              <div className='crewFooter'>
                <div className='crewFooterContent'>
                  @Dogedoil
                </div>
                <div className='crewFooterContent'>
                  follow
                </div>
              </div>
            </Item>
          </Grid>
        </SplideSlide>
        <SplideSlide>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item sx={{ height: "8rem" }} square >
              <StyledAvatar src="/img/1.png"></StyledAvatar>
            </Item>
            <Item className='crewHeader' square >
              designer
              <br/>
              #0007
            </Item>
            <Item className='crewContent' square >
              “그 누구도 막을 수 없게 될 거요···!!! 
              <br/>
              폭주하는 이 시대를!!!”
            </Item>
            <Item sx={crewFooterContainer} square >
              <div style={{width:"100%"}}>
                <img className='arrow' src='/img/Arrow.png'/>
              </div>
              <div className='crewFooter'>
                <div className='crewFooterContent'>
                  @Dogedoil
                </div>
                <div className='crewFooterContent'>
                  follow
                </div>
              </div>
            </Item>
          </Grid>
        </SplideSlide>
      </Splide>
  )
}


export default function Crew() {
  return (
    <ContainerStyle >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      <div className="container">
        <div className="mainContents">
            <Test></Test>
        </div>
      </div>
    </ContainerStyle>
  );
}


