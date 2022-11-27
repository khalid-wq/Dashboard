import Navbar from "../../componenets/navbar/Navbar"
import Sidebar from "../../componenets/sidebar/Sidebar"
import Chart from "../../componenets/chart/Chart"
import "./single.scss"
import List from "../../componenets/table/Table"
const Single = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h3 className="title">Information</h3>
                        <div className="item">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESEhISEhIREREREREREREREREQDxIRGBgZGhgYGBgcIS4lHB4rIRgYJjgmLC8xNTU1HCQ7QDszPy40NTEBDAwMEA8QGhISGDEhISExNDQ0MTE0MTQ0NDE0NDExNDE0NDE0MTQ0NDQ0NDExNDQ0ODQ0MTExMTQ0NDQ0NDQxMf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADwQAAIBAgQEBAQDBgQHAAAAAAECAAMRBAUSISIxQVEGYXGBEzJSkRSxwQcjQnKh8BViktEkM2SCsuHx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEBAQEAAgMAAAAAAAAAARECITFBElEDInH/2gAMAwEAAhEDEQA/AHAhqIgIaiRSAhgRAQwIDgQgIwEkAhCAhgRKIQEBASQCICGogILCCxwIQEBgIQEcCEBAG0e0K0CpURN3ZUHdmCj+sAgI4ErJmFAmwrUSewqIT+ctIQdwQR3BuICtHtCAj2gDaPaPaPaEDaPaFaPaAGmMVkto1oFdlldV3lxxK6jeUWEXaEVhoNo5WBEVglZKVi0wIbRismKxisCHTHkmmKBy4ENREBDAmGjgQlEQEMCA4ENRGAhgQHAhqIgIaiA6iEBEBDAgICEBHAjgQFaM7qoLMQqqCWZiAoA5knpCtPJ/HXiRq9VqFN/+GpnSQp4atQc2JHNQdh02v2gaviLx6Teng7AA2auy3v8AyKfzP2nD4nGVKr66lRqj/U/EfbtKRqRlMuGtBH7KSPS0uYLE1EN6dR6Z+pHdD72/WUcGjXB1WHnab1OiSL2BP1KJK3I6DK/FGLp2FXTXT6m4X/1D/YzscrziliBwnS9t0a2r27zzfD0XNwFNuoAtbzFuUiw+MqUa1M1HZUDg3VOKwMSnXL2ACPaQ4PEJVRalNg6MLhhyMntDmYCPaPaOBNAbRWh2itAicSsBvLbiVgN4RapjaHaPSG0k0wqErB0ycrGtJoh0wSsn0xtMaIbRSbTFGmOSUQwIyiGBI0cCGojASRRASiSKIwEkUQHUQlESiSAQGAkgESiEBAYCEBHAj2kHL+Ps2OGwhVGK1K7fDQi11Xm7fba/+YTxwtPWv2oYXXg0cDipVVt/KwKn9J5jgcAam/Ide5mpchmqSoT0M18uy1qmyrc9yLgS/g8oW/Fv2HSdhlWECgWHLblaY67/AKdeP8e/WPlvg1nYGodvLb+gnXYPwlhaduEk9d5oYRLWmxRpjacL11XonHPKDBZXTQWVF9xeY/jLw0lXDvURAKicQKje3X+/KdhSQCLFgGmw6EW+83zP1jq748s/Z9jmSoaDHhfVZT/C68yPUfpPQ7Tgsoy/4eaaRcIVdwD3Anf2nXXl6noYQEcCPaVDWitCtH0xohYSsBvLrJIhS3l0xNRG0ltAXYRB5NBaYtMkUR9MaqHTG0SfTFpgQaI8m0R4HEqIYEZRJAJFOBDUQQJIogEohqIlENRAdRDURAQgICAhARwIQEBAQgIgIQEDC8Z0deAxI+lA/wDpYH9J5dlYsLT13xCyfha61HRA9Koi62C6mKGwF+s8lyxOHV1NxJfjXM9a+FM6XKxynGUsaQbJTd7dVBtNvA5/8OwehUBtfYdO8x1zXfnrmfrt6QsAZew1Uki0x8uzFK6LoN9QNu9xfYyhi87rUrpSphnHNnNkUdzOcnrpbMd5S5SSsmpSPKeeYTOMxrnStSjTsN9KObD1tOqyjFYpAoxBp1KbD/mpcaD01C3I951kcaxHUpmFAkWuKlMn1UkfkJ0tpl5jgHq4ykyHQiAVNd9yRsdI7bjfzmwRLK5dz9BaEBHAhATTAbR7QwI4WAGmPoh6Y9oVA4lZOcu1FlSmOKEXqa7STTCpLtJLS4ItMWmS2itGGo9MaTaYpcTXBgQgIlEICYaEBDURgIaiASiSKIKiSqJA6iGBGAhgShAQgIgIQEBAQgIgIQEDmPHaXw9Pa/70A+hRv9pweARdLUygF2ZQ122tve17cgfvPQ/HCn8GzAElHRtvcfrPPMG4BHXcN9/7Mjpz7FzUykInCvcWj6/hualTey2U7XLG3le1r9evlLFBEc9L9j81pFmFNFBBsW+kS61efGj4WYHEooI4aaNw2F2bc379OfebWe0lL1eE3SoAy2JtwIe/I32nO+DAfj/EN7m3LlbYAfYCenYrCo37wBS7IAwI+ZRyufKYvvWtzySOJyTAj47VQxUEWCkOCp33BG+1+XkO07WjRCU3UsXJpsoLABmYiw2G1yfzmMjor2Cspvy0M2/sCDN7BIz6SQQoIbi2ZiOW3QA7773H3Tq1euZJ4s4rgZamnVoVwQPoNibfaROBfbkdx6S1XXVdQbXR1+9hIGpBbKOSgAegEs+uPWYC0ICOFhBZtzCFhBYYWEFlxABY+mGFi0xggqCVKY4pfqLtKSDihK0qI2koWDRG0MsBNIbTFpjfEEXxRJgK0UH4oimhwaiGBGUQxOLYlENRGWGsAlEkUQVkiiAYEMCCohgQEBCAiAhAQEBDAiAjgQKWb4M1qFSmLamXhvy1Agj+onk2JpNTq6WUo3EGUixDA9vcz2kCcx+0DCasG1UKNdB0qXtxaPlbf0a/tGNc9Y5DL0VuYB8iLiBmqrp0iwHYAAekysrzI3qDkQp0+so44VajamYqhJAJvbt7Sfxuu38v9fI6jwtmVNaxUDtvta/aekrm6lzTKoRpsriohPLqo3E8byrLTxaKqB2B3OrTbttOkwGTsdBGIXWFAqFAxuYsm/Wuf5WfHdbB+Ehr/wAIIv7d5r4GqConnLYSvhwail6igjdgFvyHCOZE26uYVFqUk+XXYk9A+kEj1veYky+NdXZ66x6372w3/dk+XMSTnM/K3LvUYjkqL7m5P6TTAnbmePH1fcCBDAjgRwJrGdMBCAjgQgIxAgR7QrR4wQVBKSDil+oNpSQcUo0qXKZWa4v4YJmqnyzDzddW0qMv/Gm7GCc5fsY4woj/AIUS4A/xh+xjw/wwijBUWSCAokiied1OskUQVEkUQDUSRRAUSVRCCUQwIyiSKJQgIQEcCEBKGAhgRAQwJcDASLGYVatOpTcXSoj02HdWBB/OWAI4EYPAMVhHwuIejUur030dtSdGHkRYzUpWYafL13PObH7TsMlTFK9M3q06KpUHQ2ZiB62M4qjmDpbuG6i20lmunPWfXW4JqdFWdwQBa91D36bTpfC+KoVCxRSRcbsAo9pxOHqNiAA5sl9wNhOhyWotNSFJFiT/AH3mK7c935+O1zV1NO1gLkDyAmJmTqChHFqWygbkvyFvM9PSZ+KzYBLFibgghup6fa3/ANm74Uyhzor4gcSX+Chvwg/xsO/YdPySZ7Weut8jdy1BSFOg7D4z09ZH1HkQD5AATRtOD8a4x1zPKRTYhi7o4HIozJe/sGM9CxCWNxyYX9+s7c+x5up6iAjgR4ppg4EKMI4gOBHtEIoEVQSkg4pfqSivzSYL1+GYWON2my7cMw8QbsZqCCOI5EQlD2ihWigZaiGogrJFnmdRqJIogqJIolxBKJIojKIaiXAaiSKIKiGolwOBDAjAQwJcQgIYEQEcCXE0gI1Rwqsx5KpY+wvDAlLOa6pRcEgM6lFHUk7SDyrPUcYr4jXtXQ79Nam9vcMftMzF5elTc7N9QndeIco+LgTUQcdNkqIfMGxHuCROVwZFRAe4mbLPXXmyzGZhcNWp7JpqDpva3sZt4DAYyodKoiBtixYG1+thGoUrNOt8POC4VthM9dV055ixkXhVKRFSqfi1RYgsBoUjqq+8362JCAnoIqtUKJyXiXNtCMAdzePp8Y6Yv8VnNE8xRFRh/oK/mwnszICq+35Tw7wCKf4utiK1RadOlTu9R2CItzfcn05czO/8A+LquZCrrpqipUb4bKGU6QQQGBJubEXPe87c85HDrra6s0B3gmi0nQajf+G+3nCrOAJWFXSRzEQkhc/Mdh0vzMcWIBta4lQAij2Hftz845WBE/KUR80v1JQPzGQS1X4TMZjcn1mliH4TMuaCiijwFFHtFAzlEkUQFkqicMdBqJIsBRKuMxgpjnLg0Vkizkj4iQG15r4DNFqdZUbaw1kdJgRJlmkOIYEYQhJiHAjkgC5IAHMnYSvisYlMXY7/AEj5jMHGY6pV58Kfwr09+8ot5lnmnhpc/rI/8R+s5jE13d1Z2LEuoux2sTaW3oNz5yNqAbY9YVby/wAS4cPicBXUUNK1Ep1HdVFS1wTvsDcbDsR5zknwxoV3S1kLa6f06G4rA+V9PtNHNcpNZkWpTDljp+Lya1jYuLENyHY+cr4bKKtIAUmQ099VCtqbDm9rsjDem23T3l8swmy6s/h9VmHvNvLE07zHyjFipUai1KpRqjf4bstRXXe7U3AGsDa+3XyNttj8MbTh1LLlenmyzYs43GaVNz0nCZtWaq+kXJJAAG5JOwAmtmOJao2hblibBRuSfSb3hvwb8uJxLDTZrUlJ1lr2AJ6deX/ua559Y76yOWXws+IppQp8KI/xMTVYcIqW02H1EAsFHqepM9E8E5QMPR0Kiqh5tvrZgzDTytptpN77lmmrRy5SACqpTX5aSCy+/eaaWA22A6Tvb/TziY2FhIALnfpCepvIkPOQBU4nA6fpC12cqeR5QqCbkytjBxXgSspaoqdBZj7S4BK2DOo6uum0tDnAjq0b8ufbpMaubEzfWZGd09IDjkTZvWCsys9wZXgq94coGOIiIhAeKKKBQWTLIkkyznjek7WUmefeMc3KAgHc7Cd1jnsh9J434sxBetboLyirgatR6gJYnfeeh5JdVDXNtrzhcgpXYT0HDJpQCc+r67cc+Ovy+rcCaazCye9hN29hc8gLmdJ8cOvomcKCWIAG5J2AmViMyZrinso51DzPp2mZjswaq9uSKdl7+ZmpSw/7v1EIoJQNRgbkjmb77y1VwtxaWMro8xLNROYlGJRQ8jLFLCKTcyXRxSS9oD/hx2BHaD/hyHlw36c1k9MyxAxMb4cWoNmKHmGQm6noy23Vh0Inn2JzbNqeJbB1KZxThiELU/h1npdHDqANNtyzAgb3O09gVD6SrhBSapjGrKromG0NqXVai2o1Ft2OlbjyEf8ATbPip4cyKmtP4ilKlR7h6odaiqeqIR0Hfmf6TqcPSFNFTnpB38ybk/eYPgvGYGpRcYOm1JQ/Ej/OxI2a9zcbd+k6BhaMwtt+k7x9VhIyd47mVArzhE2gLDG5gSpylfEJe8snlIWgNl/WW1HOV8KtpatFU1ORYugKiMh/iGx7MORklPlHQ8vSQcYiEEg7EEgjsZJNHOsPpfUOT7n+Yc/0P3mcZpDGIRopQooooFJINTEqnONqsLzi/FecGmDY78gPOYVr53nCBG3HKeUZhW+JUZvPaLG5lUqczYdpDh01GFjVyarpYes7WlmShReYvh7JC41HrH8Q4VqKE9pi8766895Md/kOZI1hcTXzfFhaJtzqEIPTr/T854XlefVaTgg3FxtfpPTaONNanTY8rgD15n+/Ka/HK3au0U2Y+Rm1k9XXSA6i6/aZTiwv0ZTLXh2pYMD1baEdDhaOhT3lQsSTLrPwygxsxlEZS0TrCcSUUidukqHoLyk5PaOicpKFAhQ6SR2kWXoKeKK9KlBr+ZVl/RjJ2qX2EGoNNfDP9TPTPujEf1UQNDB4WlRUrTppTW5NqaKgv6CTMt4zCRU6m9jCGC8UKqJKV3vAqQIiYSGDaEggTGAy7QxCCwHpLYQ7/lF0gpy9DIpPsvtaFytBc3IHvE53gV81o66bd14x7c/6XnNGdgZy2NoaHdegNx/KdxNRKrGKPaK0oaKPaKBg43EBEPpPJ/FGN11bdF394ophWGTNXJsPrYRRSkemZImhAPKc547x4K6RzO3KKKPxHBI1iPIiev5OulaKHkFJPrbcxRSVWzifkPluPSRZdV0KG/zn9IooHVLUuo9LyrfU3rFFKiwiAS0BYx4oERe0JTeNFAKn83qYWaNpOGP/AFNEezOFP5xRQNYiUKrWaKKBbpPcQyIooEJ5yRBFFAfrJFiigGYCHn6RRSKVLffv+UZzvFFKDPITJzylsj/9p/MfrFFESseOBFFNBWiiigf/2Q==" alt="" 
                            className="itemImg"/>
                          <div className="details">
                            <h3 className="itemTitle">Jean Doe</h3>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">janedoe@gmail.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">89 9 89 9 988</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">el ksiba</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">Morooco</span>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="Last Spending (Last 6 Months)"/>
                    </div>
                </div>
                <div className="bottom">
                <h3 className="title">Last Transactions</h3>
                    <List/>
                </div>
            </div>
        </div>
    )
}
export default Single