<template>
  <div class="team container">
    <header class="team__header">
      <h2 class="team__main-title">The creative crew</h2>
      <h3>Who we are</h3>
      <p>
        We are team of creatively diverse. Driven. innovative individuals
        working in various locations from the world.
      </p>
    </header>
    <ul class="team-list">
      <li
        v-for="human in team"
        :key="human.id"
        class="team-item"
      >
        <div class="team-item__img-wrap">
          <picture>
            <source
              :srcset="`img/team/${human.img}.webp`"
              type="image/webp"
            />
            <img
              :src="`img/team/${human.img}.png`"
              :alt="human.name"
              width="137"
              height="209"
            />
          </picture>
        </div>
        <h3 class="team-item__name">{{ human.name }}</h3>
        <span class="team-item__position">{{ human.position }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const team = [
  {
    id: "1",
    name: "Bill Mahoney",
    img: "photo1",
    position: "product owner",
  },
  {
    id: "2",
    name: "Saba Cabrera",
    img: "photo2",
    position: "Art director",
  },
  {
    id: "3",
    name: "Shae Le",
    img: "photo3",
    position: "Tech Lead",
  },
  {
    id: "4",
    name: "Skylah Lu",
    img: "photo4",
    position: "UX Designer",
  },
  {
    id: "5",
    name: "Griff Richards",
    img: "photo5",
    position: "Developer",
  },
  {
    id: "6",
    name: "Stan John",
    img: "photo6",
    position: "Developer",
  },
];
</script>

<style lang="scss">
.team {
  padding-top: 2rem;
}
.team__header {
  @media (min-width: $width-tablet) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    padding: 0 1.5rem;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: size(18px);
    line-height: size(27px);
    margin-bottom: size(10px);
  }
  p {
    font-size: size(14px);
    line-height: size(21px);
    @media (min-width: $width-tablet) {
      font-size: size(18px);
      line-height: size(27px);
    }
  }
}
.team__main-title {
  font-weight: 700;
  font-size: size(36px);
  line-height: size(48px);
  letter-spacing: -0.045em;
  margin-bottom: size(38px);

  @media (min-width: $width-tablet) {
    grid-row: 1/3;
  }
}
.team-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: $width-tablet-h) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 585px 585px;
  }
}
.team-item {
  position: relative;
  padding: 0.75rem 1.5rem 0.75rem;
  &:nth-child(even) {
    margin-top: 2.5rem;
    @media (min-width: $width-mobile-h) {
      padding: 1rem 1.5rem 2rem;
      margin-top: 5rem;
    }
    @media (min-width: $width-tablet-h) {
      margin-top: 0;
    }
  }
  @media (min-width: $width-tablet-h) {
    padding: 1rem 3rem 1rem;
    &:nth-child(2),
    &:nth-child(5) {
      margin-top: 5rem;
    }
  }
}

.team-item__img-wrap {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 0.66/1;
  background: var(--text-color-gray);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: size(10px);
  img {
    border-radius: inherit;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}
.team-item__name {
  font-weight: 600;
  font-size: size(14px);
  line-height: size(21px);
  @media (min-width: $width-tablet) {
    font-size: size(18px);
    line-height: size(27px);
  }
}
.team-item__position {
  text-transform: uppercase;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: size(13px);
  line-height: size(16px);
  position: absolute;
  top: 1rem;
  right: 0rem;
}
</style>
