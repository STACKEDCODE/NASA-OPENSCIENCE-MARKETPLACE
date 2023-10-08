import Plantilla from "../components/Plantilla"
import { Projectlist } from "../components/ContentList"
export default function Explore() {
    return (
        <Plantilla class="grid">
            <Projectlist type="@me" />
        </Plantilla>
    )
}