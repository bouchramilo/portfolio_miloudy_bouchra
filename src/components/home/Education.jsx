import SectionLayout from '../common/SectionLayout';
import { education } from '../../data/education';

export default function Education() {
    return (
        <SectionLayout
            title="Parcours Académique"
            data={education}
            type="education"
            defaultLayout="timeline"
        />
    );
}
