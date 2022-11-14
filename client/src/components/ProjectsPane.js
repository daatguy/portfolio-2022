import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";
import ProjectSlide from './ProjectSlide';

class ProjectsPane extends Component {
  componentDidMount() {
    this.hoverTarget = -1;
  }

  static get DISPLAY_STRING() { return "MYWORK"; }
  static get TAGLINES() { return [
    "This Website > Express React Redux",
    "Bandcamp Scraping > Rust",
    "Minecraft Modding > Java FabricAPI",
    "Tweet Cartography > Python",
    "Game Jams > Godot",
    "Spotify Thumbnails > GIMP"
  ] }
  static get ENDPOINTS() { return [
    "/this-website",
    "/bandcamp-free",
    "/minecraft-modding",
    "/tweet-cartography",
    "/game-jams",
    "/spotify-thumbnails"
  ] }

  setHoverTarget() {
      console.log(-1);
  }

  render() {
    return (
      <div className="pane projects-pane">
        <Link className="nav-left" to="/" onClick={ () =>
          this.props.setPane('landing') }>
          {"<"} back
        </Link>
        <div className={
          "projectbox-drape" +
          (this.props.pane.current === "projects" || this.props.pane.moving ?
           " playing" : " paused")
        }>
          <div className="drape-square-0"/>
          <div className="drape-square-1"/>
          <div className="drape-square-2"/>
        </div>
        <div className={
          "projectbox" +
          (this.props.pane.current === "projects" || this.props.pane.moving ?
           " playing" : " paused")
        }>
          {this.constructor.DISPLAY_STRING.split('').map(
            (letter, i) =>
                (<ProjectSlide key={i}
                  letter={letter}
                  imgClass={"project-img project-img-" + i}
                  letterClass={"project-letter-" + i}
                  title={this.constructor.TAGLINES[i]}
                  onMouseOver={() => console.log("mouse enter")}
                  endpoint={"/projects" + this.constructor.ENDPOINTS[i]}
                  />)
          ) || null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pane: state.pane
  };
}

export default connect(mapStateToProps, actions)(ProjectsPane);
