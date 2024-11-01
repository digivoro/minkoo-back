import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Community } from '../../communities/entities/community.entity';

@Entity('users_communities')
export class UserCommunity {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  communityId: number;

  @ManyToOne(() => User, (u) => u.userCommunities)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Community, (c) => c.userCommunities)
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
