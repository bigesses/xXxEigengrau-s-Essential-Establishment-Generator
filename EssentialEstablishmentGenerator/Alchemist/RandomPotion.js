import { link, pragma, note } from '../../src/engine/html'
import { set } from '../../src/engine/story'

export function RandomPotion () {
  return `${link(`<h6>Generate a random potion!</h6>`, () => {
    const $randomPotion = set(`$randomPostion`, setup.createAlchemy({ type: `potion` }))

    return pragma`
<div class='descriptive'><h3>${$randomPotion.titleReadout}</h3>${$randomPotion.descriptionReadout}</div>
${note($randomPotion.effectReadout)}
<<replace "#randpotion">>
<div class='descriptive'><h3>${$randomPotion.titleReadout}</h3>${$randomPotion.descriptionReadout}
${note($randomPotion.effectReadout)}</div>
<</replace>>`
  })}
<span id="randpotion"></span>`
}
