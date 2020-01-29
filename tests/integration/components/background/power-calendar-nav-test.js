import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | background/power-calendar-nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{background/power-calendar-nav}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#background/power-calendar-nav}}
        template block text
      {{/background/power-calendar-nav}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
