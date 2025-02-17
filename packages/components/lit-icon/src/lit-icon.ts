import { html, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js'
import { customElement, property } from 'lit/decorators.js'

@customElement('lit-icon')
export class LitIcon extends LitElement {
	@property({ type: Object })
	src: any = {}

	@property()
	theme = 'default'

	@property()
	size = '100%'

	@property({ attribute: 'style' })
	styleProp = ''

	@property({ attribute: 'class' })
	classProp = ''

	@property({ attribute: 'aria-hidden', type: Boolean })
	ariaHiddenProp = true

	@property({ attribute: 'aria-label' })
	ariaLabelProp = ''

	render() {
		return html`
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="${this.size}"
				height="${this.size}"
				aria-hidden=${this.ariaHiddenProp}
				aria-label=${ifDefined(this.ariaLabelProp ? this.ariaLabelProp : undefined)}
				style=${ifDefined(this.styleProp ? this.styleProp : undefined)}
				class=${ifDefined(this.classProp ? this.classProp : undefined)}
				fill=${ifDefined(this.src?.[this.theme]?.a?.['fill'] ?? undefined)}
				stroke=${ifDefined(this.src?.[this.theme]?.a?.['stroke'] ?? undefined)}
				stroke-width=${ifDefined(this.src?.[this.theme]?.a?.['stroke-width'] ?? undefined)}
				stroke-linecap=${ifDefined(this.src?.[this.theme]?.a?.['stroke-linecap'] ?? undefined)}
				stroke-linejoin=${ifDefined(this.src?.[this.theme]?.a?.['stroke-linejoin'] ?? undefined)}
				viewBox=${ifDefined(this.src?.[this.theme]?.a?.['viewBox'] ?? undefined)}
			>
				${unsafeSVG(
					this.src[this.theme]?.path
						?.map(
							(e: any) =>
								`<path 
                d="${e.d}"
                ${e['fill'] ? 'fill=' + e['fill'] : ''} 
                ${e['fill-rule'] ? 'fill-rule=' + e['fill-rule'] : ''} 
                ${e['clip-rule'] ? 'clip-rule=' + e['clip-rule'] : ''} 
                ${e['stroke'] ? 'stroke=' + e['stroke'] : ''} 
                ${e['stroke-linecap'] ? 'stroke-linecap=' + e['stroke-linecap'] : ''}
                ${e['stroke-linejoin'] ? 'stroke-linejoin=' + e['stroke-linejoin'] : ''} 
                ${e['stroke-width'] ? 'stroke-width=' + e['stroke-width'] : ''} 
                ${e['opacity'] ? 'opacity=' + e['opacity'] : ''} 
              ></path>`
						)
						.join('') ?? ''
				)}
				${unsafeSVG(
					this.src[this.theme]?.rect
						?.map(
							(e: any) =>
								`<rect 
                  ${e['x'] ? 'x=' + e['x'] : ''}
                  ${e['y'] ? 'y=' + e['y'] : ''}
                  ${e['width'] ? 'width=' + e['width'] : ''}
                  ${e['height'] ? 'height=' + e['height'] : ''}
                  ${e['rx'] ? 'rx=' + e['rx'] : ''}
                  ${e['fill'] ? 'fill=' + e['fill'] : ''}
                  ${e['transform'] ? 'transform="' + e['transform'] + '"' : ''}
                  ${e['stroke'] ? 'stroke=' + e['stroke'] : ''} 
                  ${e['stroke-linecap'] ? 'stroke-linecap=' + e['stroke-linecap'] : ''}
                  ${e['stroke-linejoin'] ? 'stroke-linejoin=' + e['stroke-linejoin'] : ''} 
                  ${e['stroke-width'] ? 'stroke-width=' + e['stroke-width'] : ''} 
                ></rect>`
						)
						.join('') ?? ''
				)}
				${unsafeSVG(
					this.src[this.theme]?.circle
						?.map(
							(e: any) =>
								`<circle 
                  ${e['cx'] ? 'cx=' + e['cx'] : ''}
                  ${e['cy'] ? 'cy=' + e['cy'] : ''}
                  ${e['r'] ? 'r=' + e['r'] : ''}
                  ${e['fill'] ? 'fill=' + e['fill'] : ''}
                  ${e['stroke'] ? 'stroke=' + e['stroke'] : ''} 
                  ${e['stroke-linecap'] ? 'stroke-linecap=' + e['stroke-linecap'] : ''}
                  ${e['stroke-linejoin'] ? 'stroke-linejoin=' + e['stroke-linejoin'] : ''} 
                  ${e['stroke-width'] ? 'stroke-width=' + e['stroke-width'] : ''} 
                ></circle>`
						)
						.join('') ?? ''
				)}
				${unsafeSVG(
					this.src[this.theme]?.polyline
						?.map(
							(e: any) =>
								`<polyline 
                  ${e['points'] ? 'points="' + e['points'] + '"' : ''}
                ></polyline>`
						)
						.join('') ?? ''
				)}
				${unsafeSVG(
					this.src[this.theme]?.polygon
						?.map(
							(e: any) =>
								`<polygon 
                  ${e['points'] ? 'points="' + e['points'] + '"' : ''}
                ></polygon>`
						)
						.join('') ?? ''
				)}
				${unsafeSVG(
					this.src[this.theme]?.line
						?.map(
							(e: any) =>
								`<line 
                  ${e['x1'] ? 'x1=' + e['x1'] : ''}
                  ${e['x2'] ? 'x2=' + e['x2'] : ''}
                  ${e['y1'] ? 'y1=' + e['y1'] : ''}
                  ${e['y2'] ? 'y2=' + e['y2'] : ''}
                ></line>`
						)
						.join('') ?? ''
				)}
			</svg>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-icon': LitIcon
	}
}
