export class RecallSheet {
  constructor(
    public readonly Judge: string,
    public readonly eventDance: string,
    public readonly recalls: string[]
  ) {}

  public hasCorrectRecalls(target: number): boolean {
    return this.recalls.length === target;
  }

  public hasDuplicateRecalls(): boolean {
    const uniqueRecalls = new Set(this.recalls);
    return uniqueRecalls.size !== this.recalls.length;
  }
}

export class PlacementSheet {
  constructor(
    public readonly Judge: string,
    public readonly eventDance: string,
    public readonly Placements: string[]
  ) {}

  public hasDuplicatePlacements(): boolean {
    const uniquePlacements = new Set(this.Placements);
    return uniquePlacements.size !== this.Placements.length;
  }
}
