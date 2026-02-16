import SectionLayout from '../common/SectionLayout';
import { experience } from '../../data/experience';

export default function Experience() {
    return (
        <SectionLayout
            title="Expériences Professionnelles"
            data={experience}
            type="experience"
            defaultLayout="list"
        />
    );
}
