<template>
  <div class="recipe container">
    <header class="recipe__header">
      <h2 class="recipe__title">{{ recipe.title }}</h2>
      <p class="recipe__text">{{ recipe.text }}</p>
      <div class="recipe__img-wrap">
        <picture>
          <source :srcset="`${recipe.img}.webp`"
                  type="image/webp" />
          <img :src="`${recipe.img}.png`"
               :alt="recipe.imgAlt"
               width="270"
               heigh="190" />
        </picture>
      </div>
    </header>
    <aside class="recipe__stat-block">
      <dl class="recipe-stat">
        <div class="recipe-stat__item recipe-stat__item--colored">
          <SpanIcon class="recipe-stat__item-icon"
                    :icon-name="'local_dining'"></SpanIcon>
          <dt>yields</dt>
          <dd>{{ recipe.yields }}</dd>
        </div>
        <div class="recipe-stat__item">
          <SpanIcon class="recipe-stat__item-icon"
                    :icon-name="'schedule'"></SpanIcon>
          <dt>prep time</dt>
          <dd>{{ recipe.prepareTime }}</dd>
        </div>
        <div class="recipe-stat__item">
          <SpanIcon class="recipe-stat__item-icon"
                    :icon-name="'schedule'"></SpanIcon>
          <dt>cook time</dt>
          <dd>{{ recipe.cookTime }}</dd>
        </div>
        <div class="recipe-stat__item">
          <SpanIcon class="recipe-stat__item-icon"
                    :icon-name="'schedule'"></SpanIcon>
          <dt>total time</dt>
          <dd>{{ recipe.totalTime }}</dd>
        </div>
      </dl>
    </aside>
    <div class="recipe__content recipe-content">
      <h3 class="recipe-content__title">Ingredients</h3>
      <ul class="recipe-ingredients">
        <li>
          <h4 class="recipe-content__subtitle">Graham Cracker Crust</h4>
          <ul>
            <li>
              <VCheckbox :model-value="true"
                         class="recipe__checkbox"
                         id="ingr1"
                         name="ingr1"
                         :on="true"
                         :checked="true">
                <template v-slot:label>
                  1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10
                  full sheet graham crackers)
                </template>
              </VCheckbox>
            </li>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr2"
                         name="ingr2">
                <template v-slot:label>
                  5 Tablespoons (70g) <b>unsalted butter</b>, melted
                </template>
              </VCheckbox>
            </li>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr3"
                         name="ingr3">
                <template v-slot:label>
                  1/4 cup (50g) <b>granulated sugar</b>
                </template>
              </VCheckbox>
            </li>
          </ul>
        </li>
        <li>
          <h4 class="recipe-content__subtitle">Cheesecake</h4>
          <ul>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr21"
                         name="ingr21">
                <template v-slot:label>
                  four 8-ounce blocks (904g) full-fat <b>cream cheese</b>,
                  softened to room temperature
                </template>
              </VCheckbox>
            </li>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr22"
                         name="ingr22">
                <template v-slot:label>
                  1 cup (200g) <b>granulated sugar</b>
                </template>
              </VCheckbox>
            </li>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr23"
                         name="ingr23">
                <template v-slot:label>
                  1 cup (240g) full-fat <b>sour cream</b>, at room temperature
                </template>
              </VCheckbox>
            </li>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr24"
                         name="ingr24">
                <template v-slot:label>
                  1 teaspoon <b>pure vanilla extract</b>
                </template>
              </VCheckbox>
            </li>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr25"
                         name="ingr25">
                <template v-slot:label>
                  2 teaspoons <b>fresh lemon juice</b> (optional, but
                  recommended)
                </template>
              </VCheckbox>
            </li>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr26"
                         name="ingr26">
                <template v-slot:label>
                  3 large <b>eggs</b>, at room temperature
                </template>
              </VCheckbox>
            </li>
            <li>
              <VCheckbox class="recipe__checkbox"
                         id="ingr27"
                         name="ingr27">
                <template v-slot:label>
                  topping suggestions:
                  <i>salted caramel, lemon curd, strawberry topping, chocolate
                    ganache, red wine chocolate ganache, fresh fruit, whipped
                    cream, or raspberry sauce</i>
                  (recipe in notes)
                </template>
              </VCheckbox>
            </li>
          </ul>
        </li>
      </ul>
      <!--  -->
      <h3 class="recipe-content__title">Instructions</h3>
      <ol>
        <li v-for="(item, index) in recipe.instrucions"
            :key="index">
          <p v-html="item.text"></p>
        </li>
      </ol>

      <a class="recipe-content__src-link"
         :href="recipe.sourceHref"
         _target="blank">Link to the source article</a>
    </div>
  </div>
</template>

<script>
import SpanIcon from "../components/SpanIcon.vue";
import VCheckbox from "../components/VCheckbox.vue";
export default {
  components: { SpanIcon, VCheckbox },
  // props: {
  //   recipe: {
  //     type: Object,
  //     default: () => {},
  //   },
  // },
  data() {
    return {
      recipe: {
        title: "Classic Cheesecake Recipe",
        text: "Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.",
        img: "img/recipe/photo1",
        imgAlt: "cheesecake",
        yields: "12 servings",
        prepareTime: "45 minutes",
        cookTime: "1 hour",
        totalTime: "7 hours",
        sourceHref:
          "Source: https://sallysbakingaddiction.com/classic-cheesecake/ ",
        instrucions: [
          {
            text: "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).",
          },
          {
            text: "<b>Make the crust:</b> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.",
          },
          {
            text: "<b>Make the filling:</b> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.",
          },
          {
            text: "<b>Prepare the simple water bath (see note)</b> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)",
          },
          {
            text: "Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.",
          },
          {
            text: "Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.",
          },
          {
            text: "Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.recipe.container {
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
  max-width: 1030px;

  @media (min-width: 475px) {
    padding: 0 1.5rem;
  }

  @media (min-width: $width-tablet) {
    grid-template-columns: 1fr 210px;
    column-gap: 2rem;
  }

  @media (min-width: $width-tablet-h) {
    gap: 2rem;
    padding: 0 2rem;
  }
}

.recipe__header {
  grid-column: 1/-1;
}

.recipe__title {
  font-size: size(24px);
  line-height: size(32px);
  margin-bottom: size(12px);

  @media (min-width: $width-tablet) {
    font-size: size(40px);
    line-height: size(64px);
  }
}

.recipe__text {
  color: var(--text-color-gray);
  font-size: size(12px);
  line-height: size(15px);
  font-style: italic;
  position: relative;
  padding-left: 2rem;
  margin-bottom: size(10px);

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 0;
    width: 13px;
    height: 8px;
    background: url("../assets/img/recipe/6dots.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: $width-tablet) {
    font-size: size(14px);
    line-height: size(17px);
    margin-bottom: 1.5rem;
  }
}

.recipe__img-wrap {
  background: #c4c4c4;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 1.64/1;
  box-shadow: var(--box-shadow);

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

  @media (prefers-color-scheme: dark) {}
}

// aside
.recipe__stat-block {

  @media (min-width: $width-tablet) {
    grid-column: 2/3;
    align-self: start;
    position: sticky;
    top: 0;
    padding: 2rem;
    box-shadow: var(--box-shadow);
    padding: 3rem 2rem;
    border-radius: 12px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #525252;
  }
}

.recipe-stat {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: $width-tablet) {
    gap: 2rem;
  }
}

.recipe-stat__item {
  display: grid;
  grid-template-columns: auto auto;
  align-items: start;
  justify-content: start;
  column-gap: 0.3rem;

  dt {
    font-size: size(10px);
    line-height: size(12px);
    color: var(--text-color-gray);
    font-weight: 700;
    text-transform: uppercase;
  }

  dd {
    font-size: size(12px);
    line-height: size(14px);
  }
}

.recipe-stat__item--colored {
  flex: 1 0 100%;

  .recipe-stat__item-icon,
  dd {
    color: var(--color-orange);
  }
}

.recipe-stat__item-icon {
  grid-column: 1/2;
  grid-row: 1/3;
}

// content
.recipe__content {
  @media (min-width: $width-tablet) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
}

.recipe-content {
  ul {
    li:not(:last-child) {
      margin-bottom: 1rem;
    }

    li ul {
      margin-bottom: 2rem;
    }
  }

  ol {
    text-align: justify;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: size(16px);
    line-height: size(24px);
    counter-reset: list;

    li {
      // counter-increment: li;
      padding-left: 51px;
      position: relative;

      &::before {
        counter-increment: list;
        content: counter(list);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 36px;
        height: 36px;
        background-color: var(--color-orange);
        border-radius: 6px;
        color: var(--color-white);

        position: absolute;
        top: 0;
        left: 0;
      }
    }

    li:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }
}

.recipe-content__title {
  font-weight: 700;
  font-size: size(24px);
  line-height: size(32px);
  margin-bottom: 1rem;
}

.recipe-content__subtitle {
  font-weight: 400;
  font-style: italic;
  font-size: size(16px);
  line-height: size(21px);
  margin-bottom: 0.75rem;
}

.recipe-content__src-link {
  display: inline-block;
  vertical-align: middle;
  margin-top: 2rem;
  color: var(--text-color-gray);
  font-size: size(12px);
  line-height: size(18px);
}

.recipe__checkbox {
  --primary-color: #f2994a;
  display: grid;
  grid-template-columns: auto auto;
  align-items: start;
  justify-content: start;
  gap: 9px;

  label {
    align-self: center;
    color: var(--text-color);
    font-weight: 300;
    font-size: size(14px);
    line-height: size(17px);

    b {
      font-weight: 600;
    }
  }
}
</style>
