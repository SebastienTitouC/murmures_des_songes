<template>

  <div class="last_content_wrapper">
    <CommonOrnament :svg="massageSVG" alt="Ornement - Massage" />

    <div v-if="videoControls.show" class="content_grid">
      <ServicesVideo video-name="tirage_des_cartes" />
      <div>
        <div class="flex justify-center gap-4">
          <img v-if="!videoControls.playing" class="controls" src="@/assets/svg/play.svg" alt="Lire la vidéo"
            width="54px" height="54px" @click="play()">
          <img v-else class="controls" src="@/assets/svg/pause.svg" alt="Mettre en pause la vidéo" width="54px"
            height="54px" @click="stop()">
          <img v-if="!videoControls.sound" class="controls" src="@/assets/svg/soundOff.svg" alt="Activer le son"
            width="54px" height="54px" @click="turnOnSound()">
          <img v-else class="controls" src="@/assets/svg/soundOn.svg" alt="Désactiver le son" width="54px" height="54px"
            @click="turnOffSound()">

        </div>

        <CommonText class="max-w-[600px] m-auto">
          <h1>

            À travers l’Oracle Gé, je vous <b>accompagne</b> dans une séance <b>d’introspection</b> où vous tirez
            vous-même les cartes et où nous <b>explorons ensemble</b> leurs symboles, leurs <b>messages</b> et ce qu’ils
            peuvent faire
            résonner <b>en vous</b>.

          </h1>
        </CommonText>
      </div>
    </div>

    <CommonText class="max-w-[600px] m-auto">
      <p>
        Questions personnelles, choix à faire, situation qui vous préoccupe, relations, projets ou simplement besoin d’y
        voir plus clair… plusieurs questions peuvent être abordées au cours des 45 minutes.
      </p>
      <br>
      <p>
        Les cartes ne prédisent pas votre avenir : elles offrent un support pour éclairer une situation, faire émerger
        des pistes de réflexion et parfois dégrossir ce qui vous semble confus. Vous restez libre de vos choix et de
        votre chemin.
      </p>
      <br>
      <p>
        Un moment pour vous poser, réfléchir autrement et peut-être regarder une situation sous un nouvel angle.
      </p>

    </CommonText>

    <ServicesCardsProcedure />

    <CommonText class="md:mt-8">
      <p>
        Les cartes sont donc utilisées comme un outil de réflexion et d’éclairage, et non comme une prédiction ferme et
        définitive. Elles peuvent aider à dégrossir une situation, à prendre du recul et à envisager différentes pistes,
        mais les décisions vous appartiennent toujours.

        Cette séance est un moment d’échange et d’introspection, dans lequel vous restez pleinement acteur ou actrice de
        votre propre chemin.

      </p>
      <br>
      <h1>
        Les séances sont de <b>45 minutes</b> pour un <b>tarif</b> de lancement : <b>30 euros</b> (35 € à partir du 1ᵉʳ
        janvier 2027).
      </h1>
      <br>
      <h1>
        La réalisation se fait à <b>mon domicile</b> dans la commune de <b>Goutevernisse</b>, à 45 min de
        <b>Toulouse</b>, 15 minutes de <b>Carbonne</b> et <b>Cazères</b>.
      </h1>
    </CommonText>


    <CommonText>
      <h1>
        Laissez-vous guider : vos questionnements ne demandent qu’à être éclairés.
      </h1>
    </CommonText>
    <CommonButton message="Toutes les infos" to="/informations-massage-et-tirage-cartes" position="center" />
  </div>

</template>

<script lang="ts" setup>
import massageSVG from '@/assets/svg/massage.svg'

const videoControls = ref({
  show: true,
  playing: true,
  sound: false
})

const turnOnSound = () => {
  const video = document.querySelector("video");
  if (!video) return
  video.muted = false;
  video.volume = 1;
  videoControls.value.sound = true
}
const turnOffSound = () => {
  const video = document.querySelector("video");
  if (!video) return
  video.muted = true;
  video.volume = 0;
  videoControls.value.sound = false
}

const play = () => {
  const video = document.querySelector("video");
  if (!video) return
  videoControls.value.playing = true
  video.play();

}

const stop = () => {
  const video = document.querySelector("video");
  if (!video) return
  videoControls.value.playing = false
  video.pause();
}


const handleVisibility = () => {
  turnOffSound()
  if (document.hidden) {
    videoControls.value.show = false
  }
  else if (!document.hidden) {
    videoControls.value.show = true
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibility)
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', handleVisibility)
})
</script>

<style scoped>
.content_grid {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
}

.title,
.title-right {
  font-family: var(--font-serif);
  font-weight: 800;
  font-size: var(--size-lg);
  margin-bottom: .25rem;
}

.description,
.description-right {
  font-family: var(--font-serif);
  font-size: var(--size-base);
  text-align: justify;
}

.title,
.description {
  text-align: left;
  padding: 0 .25rem 0 .75rem;
}

.title-right,
.description-right {
  text-align: right;
  padding: 0 .75rem 0 .25rem;
}

.controls {
  background-color: var(--clr-chair);
  padding: .5rem .75rem;
  border-radius: 4px;
}

@media (min-width: 640px) {

  /* Mobile large */

}

@media (min-width: 768px) {

  /* Tablette */
  .content_grid {
    margin: 0 2rem;

    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;

  }

}

@media (min-width: 1024px) {

  /* Desktop */
  .content_grid {
    grid-template-columns: max-content 500px;
    justify-content: center;
    gap: 0 4rem;

  }

}

@media (min-width: 1280px) {
  /* Desktop large */
}

@media (min-width: 1536px) {
  /* Desktop xl */
}
</style>