// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
	Image,
	Appear,
	Fill,
	Fit,
	Notes,
	Layout
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import W3DLogoWhite from './images/w3d-white.png'
import TruSourcing from './images/trusourcing.jpg'


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#241BAB",
  secondary: "white",
  tertiary: "#35EBEE",
  quartenary: "#FA157E"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
					<Fill>
						<div
							style={{
								height: "100%",
								minHeight: "500px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-around"
							}}
								>
							<div>
								<Heading size={1} fit caps lineHeight={1} textColor="secondary">
			            {"Founders : Hiring 101"}
			          </Heading>
			          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
			            {"What you need to know in 10 min"}
			          </Text>
							</div>
							<Image
								style={{alignItems:"flex-end"}}
								src={ W3DLogoWhite }
								width={'20%'}
								/>
						</div>
					</Fill>
        </Slide>
				<Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <BlockQuote>
            <Quote>
							<Text textColor="secondary">
								{ "You need three things to create a successful startup: "  }
							</Text>
							<Appear>
								<Text textColor="quartenary">
									{ "to start with " } <italic>good people</italic>
								</Text>
							</Appear>
							<Appear>
								<Text textColor="secondary">
									{ "to make something customers actually want" }
								</Text>
							</Appear>
							<Appear>
								<Text textColor="secondary">
									{ "and to spend as little money as possible" }
								</Text>
							</Appear>
						</Quote>
            <Cite textColor="secondary">{"Paul Graham"}</Cite>
          </BlockQuote>
					<Notes>
						<p>Je ne suis pas un consultant</p>
						<h2>Je suis un entrepreneur</h2>
						<p>
							Ma Mission est de rendre accessibles aux développeurs de meilleurs jobs
						<br/>
							Parce que je n'accepte pas que 7 sur 10 de mes pairs ne soient pas
							heureux au travail
						<br/>
							Parce que je ne comprend pas que des entreprises passionnantes
							n'aient pas les moyens de se faire connaitre facilement auprès des bonnes personnes
						<br/>
						<br/>
							C'est ça qui me motive et fait de moi un entrepreneur.
						</p>
						<h3>Nous sommes ici entre entrepreneurs</h3>
						<p>
							Pour accomplir notre vision, nous avons plusieurs challenge à surmonter.
							<br/>
							L'un d'entre eux est d'apprendre à embaucher.
							<br/>
							On peut écrire n'importe quelle belle histoire, si on est capable
							de rassembler les bonnes personnes autour de cette aventure.
						</p>
					</Notes>
        </Slide>
				<Slide transition={["fade"]} bgImage={TruSourcing} bgDarken={0.55}>
					<Appear>
						<Heading size={6} textColor={"tertiary"}>
							{"Il n'y a pas d'école du recrutement : "}
						</Heading>
					</Appear>
					<Appear>
						<Heading size={3} textColor={"secondary"} >
							{"Tout le monde peut l'apprendre !"}
						</Heading>
					</Appear>
					<Notes>
						<p>
							Pour apprendre, je passe du temps à des conférences,
							avec des professionnels du recrutement.
						<br/>
							Je voudrais vous partager un peu de ce que j'ai retenu
						<br/>
							La première ? Il n'y a pas d'école du recrutement : tout le monde peut apprendre
						</p>
					</Notes>
				</Slide>

				<Slide bgColor="primary" textColor="secondary">
					<Heading size={1} caps fit>Sourcing</Heading>
					<Heading textColor="tertiary" size={3} caps>Sourcer n'est pas recruter</Heading>
					<Notes>
						Le sourcing ne début pas forcément à l'analyse d'un besoin
						et prend fin lorsque le candidat accepte de rentrer
						dans un processus de recrutement classique.
						On transforme une personne en candidat.
					</Notes>
				</Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Pour trouver des écureuils, il faut repérer où sont les noisettes</Quote>
            <Cite>@MrSourcing</Cite>
          </BlockQuote>
        </Slide>

				<Slide>
					<Heading size={2} caps fit>Customiser ses messages est indispensable</Heading>
					<Appear>
						<Text>À partir de 4 variables, un message est perçu comme personnalisé</Text>
					</Appear>
				</Slide>

				<Slide>
					<Heading>Une phrase d'accroche par candidats</Heading>
				</Slide>

				<Slide>
					<Heading size={2} caps fit>Relancer n'est pas une option</Heading>
				</Slide>

				<Slide>
					<Heading size={1} caps fit>Un développeur reçoit 10 solliciations email par semaine</Heading>
				</Slide>

				<Slide>
					<Heading caps fit>JOB</Heading>
					<Heading caps fit>Money</Heading>
					<Heading caps fit>Location</Heading>
				</Slide>


				<Slide bgColor="primary" textColor="secondary">
					<Heading size={1} caps fit>Marque employeur</Heading>
					<Heading textColor="tertiary" size={3} caps>Pourquoi travailler chez vous ?</Heading>
					<Notes>
						Tout le contenu la communication que l'on peut produire et diffuser
						pour donner envie de travailler chez vous
					</Notes>
				</Slide>

				<Slide>
					<Heading caps fit size={1}>Vision</Heading>
					<Notes>
						Les gens sont motivés par l'impact qu'ils vont pouvoir avoir
						au sein de l'entreprise,
						au travers de l'entreprise
						et sur eux-même
					</Notes>
				</Slide>

				<Slide>
					<Heading caps fit size={1}>Core Values</Heading>
					<Text>Are more than posters hanging on the walls</Text>
				</Slide>

				<Slide>
					<Heading caps fit size={2}>Ambassadorisation</Heading>
					<Text>Que disent vos collaborateurs de vous ?</Text>
				</Slide>

				<Slide>
					<Heading caps fit>Culture</Heading>
					<Notes>
						Le culture fit n'est pas un mystère.
					</Notes>
				</Slide>

				<Slide>
					<Text>Quels sont les valeurs de cette entreprise</Text>
					<Text>A quoi sont attachés les gens qui travaillent ici</Text>
					<Text>Comment je vais m'intégrer dans cette espace de travail</Text>
					<Text></Text>
				</Slide>

				<Slide>
					<Heading caps fit size={1}>Diversité</Heading>
					<Notes>Quel type de personnes</Notes>
				</Slide>

				<Slide>
					<Heading caps fit>Télétravail</Heading>
				</Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
      </Deck>
    );
  }
}
