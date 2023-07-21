import { Track } from './Track.js'

export function TrackList({ title, titleSpan, link, author, album, time }) {
  return (
    <div className="content__playlist playlist">
      <Track
        title="Guilt"
        titleSpan=""
        link="http://"
        author="Nero"
        album="Welcome Reality"
        time="4:44"
      />
      <Track
        title="Elektro"
        titleSpan=""
        link="http://"
        author="Dynoro, Outwork, Mr. Gee"
        album="Elektro"
        time="2:22"
      />

      <Track
        title="I’m Fire"
        titleSpan=""
        link="http://"
        author="Ali Bakgor"
        album="I’m Fire"
        time="2:22"
      />

      <Track
        title="Non Stop"
        titleSpan="(Remix)"
        link="http://"
        author="Стоункат, Psychopath"
        album="Non Stop"
        time="4:12"
      />

      <Track
        title="Run Run"
        titleSpan="(feat. AR/CO)"
        link="http://"
        author="Jaded, Will Clarke, AR/CO"
        album="Run Run"
        time="2:54"
      />

      <Track
        title="Eyes on Fire"
        titleSpan="(Zeds Dead Remix)"
        link="http://"
        author="Blue Foundation, Zeds Dead"
        album="Eyes on Fire"
        time="5:20"
      />

      <Track
        title="Mucho Bie"
        titleSpan="(Hi Profile Remix)"
        link="http://"
        author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        album="Mucho Bie"
        time="3:41"
      />

      <Track
        title="Knives n Cherries"
        titleSpan=""
        link="http://"
        author="minthaze"
        album="Captivating"
        time="1:48"
      />

      <Track
        title="How Deep Is Your Love"
        titleSpan=""
        link="http://"
        author="Calvin Harris, Disciples"
        album="How Deep Is Your Love"
        time="3:32"
      />

      <Track
        title="Morena"
        titleSpan=""
        link="http://"
        author="Tom Boxer"
        album="Soundz Made in Romania"
        time="3:36"
      />
    </div>
  )
}
