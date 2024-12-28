import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from 'src/courses/models/course.entity';
import { Lesson } from 'src/courses/modules/lessons/models/lesson.entity';
import { UserProgress } from 'src/users/users-progress/models/user-progress.entity';

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  course_id: number;

  @ManyToOne(() => Course, (course) => course.modules)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 280, nullable: true })
  description: string;

  @OneToMany(() => Lesson, (lesson) => lesson.module)
  lessons: Lesson[];

  @OneToMany(() => UserProgress, (progress) => progress.module)
  progress: UserProgress[];
}