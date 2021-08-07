<template>
  <div class="home">
    <section class="today-spotlight-container">
      <img
        class="spotlight-artist-img"
        src="https://i.imgur.com/qZqy0gw.jpg"
        alt="Post Malone"
      />

      <div class="today-spotlight-infos">
        <h3 class="spotlight-title">Today's Spotlight:</h3>
        <h1>Post Malone</h1>
        <h3>Hollywood's Bleeding</h3>

        <img
          class="spotlight-artist-img-mobile"
          src="https://i.imgur.com/qZqy0gw.jpg"
          alt="Post Malone"
        />

        <div class="button-container">
          <router-link to="/album/1477886950">
            <button class="button is-primary listen-album-btn">Listen</button>
          </router-link>

          <router-link to="/artist/966309175">
            <button class="button see-artist-btn">See Artist</button>
          </router-link>
        </div>
      </div>
    </section>

    <section class="suggestion-container">
      <h1>Trending</h1>

      <span class="sub">
        <h3>Artists</h3>
      </span>

      <div class="artist-container">
        <div class="artist-display">
          <router-link to="/artist/159260351" class="artist">
            <img
              class="artist-picture"
              src="https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,625,center-middle,forcex,ffffff/img/var/plain_site/storage/images/beaute/news-beaute/beaute-des-stars/beaute-la-dangereuse-erreur-de-taylor-swift-a-ne-pas-copier-3782552/90353123-1-fre-FR/Beaute-la-dangereuse-erreur-de-Taylor-Swift-a-ne-pas-copier.jpg"
              alt="Taylor Swift"
            />

            <span class="artist-name suggested-title">Taylor Swift</span>
          </router-link>

          <router-link to="/artist/183313439" class="artist">
            <img
              class="artist-picture"
              src="https://s3.r29static.com/bin/entry/710/720x864,85/2214477/image.webp"
              alt="Ed Sheeran"
            />

            <span class="artist-name suggested-title">Ed Sheeran</span>
          </router-link>

          <router-link to="/artist/271256" class="artist">
            <img
              class="artist-picture"
              src="https://cdn.vox-cdn.com/thumbor/kQ80fqXhGa5gqX783fBzPhxonCc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20045463/drake_raptor.jpg"
              alt="Drake"
            />

            <span class="artist-name suggested-title">Drake</span>
          </router-link>
        </div>
      </div>

      <div class="album-container">
        <h3 class="sub">Albums</h3>

        <div class="album-display">
          <router-link to="/album/1399202539" class="album">
            <img
              class="suggested-album"
              src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/eb/45/1d/eb451db3-53c9-5ba5-ba44-b059be004d29/source/300x300bb.jpg"
              alt="Sweetner Of Ariana Grande"
            />

            <span class="album-name suggested-title"
              >Sweetner - Ariana Grande</span
            >
          </router-link>

          <router-link to="/album/1193701079" class="album">
            <img
              class="suggested-album"
              src="https://images-na.ssl-images-amazon.com/images/I/618VVjlKb1L.jpg"
              alt="Divide Of Ed Sheeran"
            />

            <span class="album-name suggested-title">Divide - Ed Sheeran</span>
          </router-link>

          <router-link to="/album/1434770366" class="album">
            <img
              class="suggested-album"
              src="http://neoprisme.com/wp-content/uploads/2018/09/eminem-kamikaze.jpg"
              alt="Kamikaze Of Eminem"
            />
            <span class="album-name suggested-title">Kamikaze - Eminem</span>
          </router-link>

          <router-link to="/album/1269268686" class="album">
            <img
              class="suggested-album"
              src="https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/b7/d7/cb/b7d7cb57-9272-f63d-23b4-6d9d84580fca/source/300x300bb.jpg"
              alt="Beautiful Trauma - PINK"
            />

            <span class="album-name suggested-title"
              >Beautiful Trauma - Pink</span
            >
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.today-spotlight-container {
  background-color: $grey-200;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spotlight-artist-img-mobile {
  display: none;
}

.spotlight-artist-img {
  max-width: 400px;
  max-height: 400px;
}

.today-spotlight-infos {
  color: white;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 56px;
  font-weight: bold;
}

h3 {
  font-size: 36px;
  font-weight: bold;
}

.spotlight-title {
  opacity: 0.3;
  letter-spacing: 2px;
}

.button {
  font-size: 24px;
  height: 60px;
  width: 250px;
  margin-right: 24px;
  margin-top: 36px;
  transition: 0.2s;

  &.see-artist-btn {
    color: white;
    background: transparent;

    &:hover {
      background: white;
      color: black;
    }
  }
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.suggestion-container {
  display: flex;
  background-color: $grey-100;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 44px 0;
  color: white;

  h1 {
    width: 100%;
    text-align: center;
  }

  h3 {
    opacity: 0.7;
    margin-top: 12px;
    font-size: 30px;
  }

  .artist-container {
    width: 100%;

    .artist-display {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, 280px);
      justify-content: center;
      grid-gap: 1rem;

      .artist {
        position: relative;
        height: 280px;
        overflow: hidden;
        display: flex;
        align-items: flex-end;

        .artist-picture {
          width: 100%;
        }

        .artist-name {
          font-size: 30px;
        }
      }
    }
  }

  .album-container {
    width: 100%;
    margin-top: 24px;

    .sub {
      text-align: center;
    }

    .album-display {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, 180px);
      justify-content: center;
      grid-gap: 1rem;
    }

    .album {
      position: relative;
      height: 180px;
      width: 180px;
    }

    .suggested-album {
      position: relative;
      width: 100%;
    }
  }
  .suggested-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@media screen and (max-width: 1250px) {
  .today-spotlight-container {
    h1 {
      font-size: 36px;
    }
  }
}

@media screen and (max-width: 980px) {
  .today-spotlight-infos {
    margin-left: 24px;
  }
}

@media screen and (max-width: 900px) {
  .today-spotlight-infos {
    h1,
    h3 {
      font-size: 24px;
    }
  }

  .suggestion-container {
    h1 {
      font-size: 40px;
    }
  }
}

@media screen and (max-width: 800px) {
  .today-spotlight-container {
    text-align: center;
  }

  .today-spotlight-infos {
    width: 100%;
    margin-left: 0;
  }

  .spotlight-artist-img {
    display: none;
  }

  .spotlight-artist-img-mobile {
    display: block;
    width: 200px;
    height: 200px;
    margin: 24px auto 0 auto;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    .button {
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 450px) {
  .button-container {
    display: flex;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .spotlight-artist-img {
    width: 100%;
    margin-left: 0px;
  }

  .suggestion-container {
    margin-bottom: 25px;

    h1 {
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
      margin: 5px;
    }

    .artist-container {
      width: 100%;

      .artist-display {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .artist {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
