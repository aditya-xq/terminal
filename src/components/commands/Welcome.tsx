import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled"

const asciiXQ = String.raw`
██╗  ██╗ ██████╗    ██╗███████╗
╚██╗██╔╝██╔═══██╗  ╔██╝██╔════╝
 ╚███╔╝ ██║   ██║  ╚═╝ ███████╗
 ██╔██╗ ██║   ██║      ╚════██║
██╔╝ ██╗╚██████╔╝      ███████║
╚═╝  ╚═╝ ╚════█╔╝      ╚══════╝
              ╚═╝

████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
`

const asciiDeveloper = String.raw`
        ▄▄▄▄▄▄▄▄▄
      ▄█████████████▄
     ███▀▀▀▀▀▀▀▀▀▀▀███
    ███  ▓▓▓  ▓▓▓  ███
    ██   ▓▓▓  ▓▓▓   ██
    ███           ███
     ███  ═════  ███
      ████▄▄▄▄▄████
        ▀███████▀
          ║║║║║
        ╔═══════╗
        ║█████████
        ║█▓▓▓▓▓███
        ║███████▓█
        ╚═══════╝
         ║║   ║║
        ▐▌▐▌ ▐▌▐▌
`

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>{asciiXQ}</PreName>
        <PreWrapper>
          <PreNameMobile>{asciiDeveloper}</PreNameMobile>
        </PreWrapper>
        <div>Welcome to the terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this{" "}
          <Link href="https://github.com/aditya-xq/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>{asciiDeveloper}</PreImg>
      </div>
    </HeroContainer>
  )
}

export default Welcome
