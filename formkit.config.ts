import type { DefaultConfigOptions } from '@formkit/vue'
// @ts-ignore
import { primeInputs } from '@sfxcode/formkit-primevue'
import {generateClasses} from "@formkit/themes";

// @ts-ignore
function scrollToErrors(node) {
    if (node.props.type === 'form') {
// @ts-ignore
        function scrollTo(node) {
            const el = document.getElementById(node.props.id)
            if (el) {
                el.scrollIntoView()
            }
        }

        function scrollToErrors () {
// @ts-ignore
            node.walk(child => {
                // Check if this child has errors
                if (child.ledger.value('blocking') || child.ledger.value('errors')) {
                    // We found an input with validation errors
                    scrollTo(child)
                    // Stop searching
                    return false
                }
            }, true)
        }

        const onSubmitInvalid = node.props.onSubmitInvalid
        node.props.onSubmitInvalid = () => {
            onSubmitInvalid(node)
            scrollToErrors()
        }
        node.on('unsettled:errors', scrollToErrors)
    }
    return false
}

const config: DefaultConfigOptions = {
    inputs: primeInputs,
    config: {
        classes: generateClasses({
            global: {
                input: 'w-full input',
                inner: 'w-full',
                wrapper: 'w-full mb-2',
                outer: 'w-full',
                label: 'label text-lg',
            },
            text: {
                input: 'bg-base-content/10 input-bordered',
            },
            number: {
                input: 'bg-base-content/10 input-bordered',
            },
            tel: {
                input: 'bg-base-content/10 input-bordered',
            },
            email: {
                input: 'bg-base-content/10 input-bordered',
            },
            password: {
                input: 'bg-base-content/10 input-bordered',
            },
            submit: {
                input: 'flex items-center w-full btn btn-primary mt-4',
            }
        }),
    },
    plugins: [scrollToErrors]
}

export default config